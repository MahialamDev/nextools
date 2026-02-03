import { Search } from 'lucide-react';
import React from 'react';

const SearchTools = () => {
    return (
        <div className='relative max-w-5xl mx-auto mt-5 md:mt-8'>
            <Search className='absolute top-1/2 -translate-y-1/2 left-6 text-gray-500 '  />
            <input type="text" className='w-full md:p-5 p-2.5 pl-14 md:pl-15 border-2 md:border-3 md:font-semibold text-[18px] bg-primary/2 border-gray-200/20 rounded-xl md:rounded-2xl shadow focus:outline-none  focus:border-primary/40' placeholder='Search Tools...' />
        </div>
    );
};

export default SearchTools;