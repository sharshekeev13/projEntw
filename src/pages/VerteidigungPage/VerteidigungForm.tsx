import React, { useState } from 'react';

interface VerteidigungData {
  thema: string;
  author: string;
  betreuer: string;
  datum: string;
  uhrzeit: string;
  raum: string;
  keywords: string;
  studiengang: string;
  fakultät: string;
  artDerArbeit: string;
}

interface Props {
  initialData?: VerteidigungData;
  onSubmit: (data: VerteidigungData) => void;
}

const VerteidigungForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<VerteidigungData>({
    thema: initialData?.thema || '',
    author: initialData?.author || '',
    betreuer: initialData?.betreuer || '',
    datum: initialData?.datum || '',
    uhrzeit: initialData?.uhrzeit || '',
    raum: initialData?.raum || '',
    keywords: initialData?.keywords || '',
    studiengang: initialData?.studiengang || '',
    fakultät: initialData?.fakultät || '',
    artDerArbeit: initialData?.artDerArbeit || '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 flex justify-center">
      <div className="w-full max-w-screen-lg bg-white border border-gray-200 rounded-2xl shadow-2xl p-10">
        <h1 className="text-2xl font-bold text-blue-900 mb-10">
          {initialData ? 'Verteidigung bearbeiten' : 'Verteidigung erstellen'}
        </h1>
<form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
>
  {/* Левая колонка */}
  <div>
    <label className="text-sm text-gray-700">Thema</label>
    <input
      name="thema"
      value={formData.thema}
      onChange={handleChange}
      placeholder="Thema"
      className="w-full bg-gray-100 rounded p-2 mt-1"
    />
  </div>

  {/* Правая колонка */}
  <div>
    <label className="text-sm text-gray-700">Studiengang</label>
    <select
      name="studiengang"
      value={formData.studiengang}
      onChange={handleChange}
      className="w-full bg-gray-100 rounded p-2 mt-1"
    >
      <option>Informatik</option>
      <option>WI</option>
    </select>
  </div>

  <div>
    <label className="text-sm text-gray-700">Author</label>
    <input
      name="author"
      value={formData.author}
      onChange={handleChange}
      placeholder="Author"
      className="w-full bg-gray-100 rounded p-2 mt-1"
    />
  </div>

  <div>
    <label className="text-sm text-gray-700">Fakultät</label>
    <select
      name="fakultät"
      value={formData.fakultät}
      onChange={handleChange}
      className="w-full bg-gray-100 rounded p-2 mt-1"
    >
      <option>Informatik</option>
      <option>WI</option>
    </select>
  </div>

  <div>
    <label className="text-sm text-gray-700">Betreuer</label>
    <input
      name="betreuer"
      value={formData.betreuer}
      onChange={handleChange}
      placeholder="Betreuer"
      className="w-full bg-gray-100 rounded p-2 mt-1"
    />
  </div>

  <div>
    <label className="text-sm text-gray-700">Datum</label>
    <input
      type="date"
      name="datum"
      value={formData.datum}
      onChange={handleChange}
      className="w-full bg-gray-100 rounded p-2 mt-1"
    />
  </div>

  <div>
    <label className="text-sm text-gray-700">Uhrzeit</label>
    <input
      type="time"
      name="uhrzeit"
      value={formData.uhrzeit}
      onChange={handleChange}
      className="w-full bg-gray-100 rounded p-2 mt-1"
    />
  </div>

  <div className="row-span-3 h-full">
    <label className="text-sm text-gray-700">Keywords</label>
    <textarea
      name="keywords"
      value={formData.keywords}
      onChange={handleChange}
      placeholder="Keywords"
      className="w-full  min-h-[220px] bg-gray-100 rounded p-2 mt-1 resize-none"
    />
  </div>

  <div>
    <label className="text-sm text-gray-700">Art der Arbeit</label>
    <select
      name="artDerArbeit"
      value={formData.artDerArbeit}
      onChange={handleChange}
      className="w-full bg-gray-100 rounded p-2 mt-1"
    >
      <option>Bachelorarbeit</option>
      <option>Masterarbeit</option>
    </select>
  </div>

  <div>
    <label className="text-sm text-gray-700">Raum</label>
    <input
      name="raum"
      value={formData.raum}
      onChange={handleChange}
      placeholder="Raum"
      className="w-full bg-gray-100 rounded p-2 mt-1"
    />
  </div>

  {/* Кнопка */}
  <div className="md:col-span-2 flex justify-end">
    <button
      type="submit"
      className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
    >
      {initialData ? 'Ändern' : 'Speichern'}
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default VerteidigungForm;
