"use client"; 
import React from "react";

interface SearchComponentProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex text-center items-center w-full justify-center mb-5">
      <form className="max-w-sm flex gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by author or book"
        />
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
