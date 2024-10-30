import React from 'react'
import Connect from './Connect'

function Navbar() {
  return (
    <nav className="w-full bg-white bg-opacity-60 py-2 z-20">
        <div className='flex justify-between items-center w-full mx-auto max-w-[1082px]'>
            <div className='flex items-center justify-start cursor-pointer'>
                <svg className='h-12 w-12 p-2' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 512 512" xmlSpace="preserve">
                    <g>
                        <path className="st0" d="M214.2,319.991L214.2,319.991L214.2,319.991C197.34,301.585,232.293,180.319,27.075,97.569 c-33.75,6.125-71.688,176.672,127.719,228.844c59.609,29.797,50.219,79.469,50.219,107.078h38.344 c0,0-15.688-87.578,54.375-119.672c47.672-21.828,179.328-28.828,214.265-225.547C445.387,49.757,208.825,124.835,214.2,319.991z M165.84,286.804c-4.063,2.813-9.641,1.797-12.453-2.266c-19.516-28.266-73.484-93.484-97.344-117.281 c-3.5-3.484-3.5-9.156,0-12.641c3.484-3.5,9.156-3.5,12.641,0c25.344,25.391,78.688,89.859,99.422,119.734 C170.918,278.413,169.903,283.991,165.84,286.804z M415.965,141.663c-65.25,41.234-118.578,109.844-142.625,147.109 c-2.672,4.141-8.219,5.328-12.359,2.656c-4.141-2.688-5.328-8.219-2.641-12.375c25.141-38.766,79.141-108.766,148.047-152.5 c4.172-2.656,9.688-1.406,12.344,2.766C421.372,133.491,420.137,139.007,415.965,141.663z"/>
                    </g>
                </svg>
                <h1 className='text-lg font-semibold'>PestWallet</h1>
            </div>
            <div className='flex justify-end gap-4 items-center'>
                <Connect/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar