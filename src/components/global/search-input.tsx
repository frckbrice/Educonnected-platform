import { useTheme } from 'next-themes';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

const SearchInput = () => {
    const { resolvedTheme } = useTheme();
    const [focused, setFocused] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
        if (
            (e.type === 'keydown' && 'key' in e && e.key === 'Enter') ||
            e.type === 'click'
        ) {
            console.log('Searching for:', searchText);
            // Implement your search function here
        }
    };

    return (
        <div className="xl:w-full lg:w-[78%] w-[90%] relative group">
            <div
                className={`
          flex items-center w-full rounded-lg overflow-hidden
          transition-all duration-300
          ${focused ? 'ring-2 ring-blue-400 shadow-lg' : 'shadow'}
          ${resolvedTheme === 'dark'
                        ? 'bg-gray-800 border-gray-700'
                        : 'bg-white border border-gray-200'}
        `}
            >
                {/* Search Icon */}
                <div className="flex items-center justify-center pl-3 text-gray-400">
                    <BiSearch size={20} />
                </div>

                {/* Input Field */}
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleSearch}
                    placeholder="Search Courses"
                    className={`
            w-full py-3 px-2 outline-none text-base
            transition duration-200 font-Josephin
            ${resolvedTheme === 'dark'
                            ? 'bg-gray-800 text-gray-100 placeholder:text-gray-400'
                            : 'bg-white text-gray-800 placeholder:text-gray-500'}
          `}
                />

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className={`
            h-full px-4 flex items-center justify-center
            transition-all duration-300 hover:bg-blue-600
            ${focused ? 'bg-blue-500 w-20' : 'bg-blue-400 w-16'}
            ${searchText.length > 0 ? 'opacity-100' : 'opacity-90'}
          `}
                    aria-label="Search"
                >
                    <span className="text-white font-medium">Search</span>
                </button>
            </div>

            {/* Optional: Show search suggestions */}
            {focused && searchText.length > 0 && (
                <div className={`
          absolute z-10 w-full mt-1 rounded-lg shadow-lg py-2
          max-h-60 overflow-y-auto
          ${resolvedTheme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}
        `}>
                    {/* We'll  populate this with search suggestions */}
                    {/* This is just a placeholder */}
                    <div className={`
            px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700
            ${resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'}
          `}>
                        Popular: {searchText}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchInput;

// Usage in your component:
/*
{/* Modern Search Input   <-----


<div className='xl:w-[65%] lg:w-[78%] w-[90%] relative'>
  <div className={`
    flex items-center w-full h-[50px] rounded-lg overflow-hidden
    transition-all duration-300 shadow
    ${theme === 'dark' 
      ? 'bg-gray-800 border-gray-700' 
      : 'bg-white border border-gray-200'}
  `}>
    {/* Search Icon 
    <div className="flex items-center justify-center pl-3 text-gray-400">
      <BiSearch size={20} />
    </div>
    
    {/* Input Field *  <-----

    <input
      type="text"
      placeholder="Search Courses"
      className={`
        w-full h-full py-2 px-2 outline-none text-base
        transition duration-200 font-Josephin
        ${theme === 'dark' 
          ? 'bg-gray-800 text-gray-100 placeholder:text-gray-400' 
          : 'bg-white text-gray-800 placeholder:text-gray-500'}
      `}
    />
    
    {/* Search Button <-----
    <button
      onClick={() => console.log('Search clicked')}
      className="h-full px-4 bg-blue-500 hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
      aria-label="Search"
    >
      <span className="text-white font-medium">Search</span>
    </button>
  </div>
</div>
*/