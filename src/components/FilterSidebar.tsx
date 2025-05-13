import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import { useState } from 'react';

type FilterSidebarProps = {
  className?: string;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ className = '' }) => {

  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddKeyword = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords([...keywords, trimmed]);
      setInputValue('');
    }
  };

  const handleRemoveKeyword = (tag: string) => {
    setKeywords(keywords.filter(k => k !== tag));
  };
  
  return (
  <div className={`bg-white p-4 shadow rounded-md space-y-6 flex flex-col w-full md:w-64 ${className}`}>
    <h2 className="font-bold text-lg text-center">Filters</h2>

    <div className='space-y-2'>
      <div className="flex items-center gap-2 text-sm">
        <div className='h-4 w-4 bg-blue-700 rounded-full'></div>
        <div>Bachelor</div>
      </div>
       <div className="flex items-center gap-2 text-sm">
        <div className='h-4 w-4 bg-green-700 rounded-full'></div>
        <div>Master</div>
      </div>
    </div>


    <div className="space-y-2">
      <label className="block text-sm font-medium">Datum</label>
      <div className="flex items-center gap-2">
        <span className="text-sm w-12">von:</span>
        <input type="date" className="border rounded w-full px-2 py-1" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm w-12">bis:</span>
        <input type="date" className="border rounded w-full px-2 py-1" />
      </div>
    </div>

    <div className="space-y-2">
      <label className="block text-sm font-medium">Zeit</label>
      <div className="flex items-center gap-2">
        <span className="text-sm w-12">von:</span>
        <input type="time" className="border rounded w-full px-2 py-1" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm w-12">bis:</span>
        <input type="time" className="border rounded w-full px-2 py-1" />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium">Art der Arbeit</label>
      <select className="border rounded w-full px-2 py-1">
        <option>Alle</option>
        <option>Bachelorarbeit</option>
        <option>Masterarbeit</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium">Studiengang</label>
      <select className="border rounded w-full px-2 py-1">
        <option>Alle</option>
        <option>GM</option>
        <option>WI</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium">Fakultät</label>
      <select className="border rounded w-full px-2 py-1">
        <option>Alle</option>
        <option>GM</option>
        <option>WI</option>
      </select>
    </div>

    <div>
        <label className="block text-sm font-medium mb-1">Keywords</label>
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddKeyword()}
            placeholder="Search"
            className="w-full border px-3 py-1 rounded bg-gray-100"
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {keywords.map((tag) => (
            <div
            key={tag}
            onClick={() => handleRemoveKeyword(tag)}
            className="cursor-pointer bg-primary text-white text-sm px-3 py-1 rounded flex items-center hover:bg-blue-800 transition"
          >
            {tag} &times;
          </div>
          ))}
        </div>
      </div>

    <ButtonPrimary
      label="Filter anwenden"
      onClick={() => {}}
    />
  </div>
  )
};

export default FilterSidebar;
