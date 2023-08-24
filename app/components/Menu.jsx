import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <div className="w-full h-screen">
      <div className="container mx-auto">
        {/* menu titles */}
        <div>
          <p className="text-white text-2xl font-normal text-center pt-8">
            Discover our Menu
          </p>
          <p className="text-white text-sm font-normal text-center pt-2">
            Delicious Bites, Delivered Fast
          </p>
        </div>

        {/* menu cards */}
        <div className="grid grid-cols-2 gap-y-7 text-white pt-4">
          {/* Menu 1 */}
          <div className="shadow-xl ring-1 ring-white rounded-md overflow-hidden break-all w-[610px] h-[253px] bg-[url('/assets/images/beverages.svg')] relative ">
          <div className="bg-black bg-opacity-50 w-full h-full ">
          <div className="absolute">
          <div className="flex py-5 items-center justify-center space-x-2">
          <h2 className=" text-lg pl-60 ">Beverages</h2>
          <Image src={"/assets/icons/tea_cup.svg"} width={0} height={0} className="w-5 h-5" alt="tea_cup icon" />
          </div>
          
          <div>

          </div>

          </div>

          </div>
           
          </div>
          {/* Menu 2 */}
          <div className="shadow-xl ring-1 ring-white rounded-md  overflow-hidden break-all w-[610px] h-[253px]">
            <Image
              src="/assets/images/soft_drinks.svg"
              width={610}
              height={253}
              alt="soda"
            />
          </div>
          {/* Menu 3 */}
          <div className="shadow-xl ring-1 ring-white rounded-md overflow-hidden break-all w-[610px] h-[253px] bg-[url]">
            <Image
              src="/assets/images/sharwarma.svg"
              width={610}
              height={253}
              alt="sharwarma"
              className="object-cover"
            />
          </div>
          {/* Menu 4 */}
          <div className="shadow-xl ring-1 ring-white rounded-md  overflow-hidden break-all w-[610px] h-[253px]">
            <Image
              src="/assets/images/dessert.svg"
              width={610}
              height={253}
              alt="dessert"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
