'use client'

import { useState, useEffect, SetStateAction } from 'react';

// // Sample data (could be fetched from an API)
// const mockData = [
//   { id: 1, title: 'Next.js Documentation' },
//   { id: 2, title: 'React.js Guide' },
//   { id: 3, title: 'Tailwind CSS Introduction' },
//   { id: 4, title: 'JavaScript Basics' },
//   { id: 5, title: 'TypeScript in Depth' },
// ];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [filteredResults, setFilteredResults] = useState([]);

  // useEffect(() => {
  //   if (searchTerm === '') {
  //     // Show no results when input is empty
  //     setFilteredResults([]);
  //   } else {
  //     // Filter results based on search term
  //     const results = mockData.filter((item) =>
  //       item.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredResults(results);
  //   }
  // }, [searchTerm]);

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='max-w-md mx-auto p-4'>
      <input
        type='text'
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleChange}
      />

      {/* <div className='mt-4'>
        {filteredResults.length > 0 ? (
          <ul className='space-y-2'>
            {filteredResults.map((item) => (
              <li
                key={item.id}
                className='p-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all'
              >
                {item.title}
              </li>
            ))}
          </ul>
        ) : (
          searchTerm !== '' && (
            <p className='text-gray-500'>No results found.</p>
          )
        )}
      </div> */}
    </div>
  );
}
