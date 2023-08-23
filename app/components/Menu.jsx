import Image from 'next/image'
import React from 'react'

export default function Menu() {
  return (
    <div className='w-full h-screen'>
        <div className='container mx-auto'>
        {/* menu titles */}
        <div>
        <p className="text-white text-2xl font-normal text-center pt-8">Discover our Menu</p>
        <p className="text-white text-sm font-normal text-center pt-2">Delicious Bites, Delivered Fast</p>
        </div>

        {/* menu cards */}
        <div className='grid grid-cols-2 gap-y-7 text-white pt-4'>
            <div className='shadow-xl ring-1 ring-white rounded-md overflow-hidden break-all w-[610px] h-[253px]'>
            <Image src="/assets/images/beverages.svg" width={610} height={253} alt="chai tea"/>

            </div>
            <div className='shadow-xl ring-1 ring-white rounded-md  overflow-hidden break-all w-[610px] h-[253px]'>
            <Image src="/assets/images/soft_drinks.svg" width={610} height={253} alt="soda"/>
            </div>
            <div className='shadow-xl ring-1 ring-white rounded-md overflow-hidden break-all w-[610px] h-[253px]'>
            <Image src="/assets/images/sharwarma.svg" width={610} height={253} alt="sharwarma" className='object-cover'/>
            </div>
            <div className='shadow-xl ring-1 ring-white rounded-md  overflow-hidden break-all w-[610px] h-[253px]'>
            <Image src="/assets/images/dessert.svg" width={610} height={253} alt="dessert" className='object-cover'/>
            </div>
        </div>
    


       
        </div>
    </div>
  )
}
