import React, { useState } from 'react';
import HashTag from './Components/HashTag';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <SearchBar />
      <div>
        <HashTag name="Gaming" />
        <HashTag name="Minecraft" />
      </div>

      <div className='grid mt-4 grid-cols-4 gap-8'>

        <div className=' col-span-3'>

          <div className={show ? 'w-fit rounded-full py-1 bg-clappys-grey pr-3' : 'w-fit rounded-full py-1 bg-clappys-grey pl-3'} onClick={() => { show ? setShow(false) : setShow(true) }}>
            <div><span className={show ? 'px-3 py-1 bg-clappys-yellow rounded-full' : ''}>🔥 Trending</span> <span className={show ? '' : 'px-3 py-1 bg-amber-400 rounded-full'}>New</span></div>
          </div>

          <div className=' text-4xl'>Top gmaing communities</div>
          <div className=''>Trending communities by votes</div>

          <div className=' p-4 bg-clappys-grey'>
            <div>
              <div className='bg-black'></div>
              <div className='flex justify-between items-center'>
                <div className=' text-2xl'>Mushroom</div>
                <div>Learn more 🔗</div>
              </div>
              <span className='px-4 py-1 bg-pink-500 rounded'># Promoted</span>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat iure corporis omnis error provident veniam sed quo quasi odio. Fuga, recusandae quasi ullam placeat illum similique vel libero repudiandae.</div>
            </div>
          </div>

          <div className=' p-4 bg-clappys-grey'>
            <div>
              <div className='bg-black'></div>
              <div className='flex justify-between items-center'>
                <div className=' text-2xl'>Mudae</div>
                <div>Learn more 🔗</div>
              </div>
              <span className='px-4 py-1 bg-pink-500 rounded'># Promoted</span>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat iure corporis omnis error provident veniam sed quo quasi odio. Fuga, recusandae quasi ullam placeat illum similique vel libero repudiandae.</div>
            </div>
          </div>

        </div>

        <div className='flex flex-col gap-4'>
          <div>Join our Discord</div>
          <div className='flex flex-col gap-2'>
            <div>
              Add your Community/Server
            </div>
            <div className=' bg-clappys-grey p-4 rounded-xl'>
              <div>Get new members</div>
              <div>A much broader reach to public</div>
              <div>Get on the radar all within seconds</div>
              <div>And much more</div>
            </div>
            <button className="btn normal-case bg-clappys-grey border-transparent text-black">Login to add Community</button>
          </div>

          <div className='flex flex-col gap-2'>
            <div>
              Share your opinion with us
            </div>
            <div className=' bg-clappys-grey p-4 rounded-xl'>
              <div>We believe progress is made together! If you share your opinion with us, we'll even give you 1 month premium for free 🤝</div>
            </div>
            <button className="btn normal-case bg-clappys-grey border-transparent text-black">Share opinion</button>
          </div>

        </div>

      </div>


    </div>
  )
};

export default App;
