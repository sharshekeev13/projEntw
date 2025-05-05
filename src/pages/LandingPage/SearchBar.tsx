// components/SearchBar.tsx
import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div className="absolute left-1/2 top-[100%] transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-1/3 shadow-lg rounded-md">
            <div className="flex items-center bg-white rounded-md px-4 py-2">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 5.65a7.5 7.5 0 010 10.6z" />
                </svg>
                <input
                    type="text"
                    placeholder="Suche"
                    className="flex-grow px-4 py-2 focus:outline-none rounded-md"
                />
                <button className="text-white rounded-md p-2 hover:bg-blue-700" style={{backgroundColor: 'rgb(37,58,103)'}}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
