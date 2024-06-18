import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="p-5 bg-gray-700">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
              <a href="/">
              <h1>  <span className=' text-[25px] text-white '>Movie <span className='p-2 text-white bg-blue-600 rounded-xl'>AI</span></span></h1>
            </a>

                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Movies touch our hearts and awaken our vision, and change the way we see things.  - Martin Scorsese

</p>

               
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    074 032 0010
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    thaveeshathathsara@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div>
            <p className="mt-6 text-center text-gray-500 dark:text-gray-400 lg:mt-0 lg:flex-1">
              © Brand 2024 - All rights reserved
            </p>
          </div>
          </div>

          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
