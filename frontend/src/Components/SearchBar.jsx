import React from 'react';


const SearchBar = () => {
    return (

        <div className='mb-4'>
            <h1 className=' text-4xl font-bold'>Explore millions of Communities & Servers</h1>
            <form className=' w-full flex justify-center items-center gap-4'>
                <input className=" w-full rounded-lg h-12 p-4 bg-clappys-grey" placeholder="Search for gaming communities, servers..." />
                <button type="submit" className='w-12 p-1 flex rounded-lg justify-center items-center bg-clappys-yellow'>
                    <svg version="1.1" viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg">
                        <svg viewBox="0 0 101 101" xmlns="http://www.w3.org/2000/svg">
                            <path className="color000 svgShape" d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z" fill="#fff" />
                        </svg>
                    </svg>
                </button>
            </form>
        </div>
    )
};

export default SearchBar;
