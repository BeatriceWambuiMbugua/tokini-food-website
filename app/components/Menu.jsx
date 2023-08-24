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
        <div className="grid grid-cols-2 gap-7 text-white pt-4">
          {/* Menu 1 */}
          <div className="shadow-xl ring-1 ring-white rounded-md overflow-hidden break-all bg-[url('/assets/images/beverages.svg')] relative w-full  bg-cover bg-no-repeat">
            <div className="bg-black bg-opacity-50 w-full h-full ">
              <div className="absolute  w-[610px] mx-auto ">
                <div className="flex pt-5 items-center justify-center space-x-2 ">
                  <h2 className=" text-lg ">Beverages</h2>
                  <Image
                    src={"/assets/icons/tea_cup.svg"}
                    width={0}
                    height={0}
                    className="w-5 h-5"
                    alt="tea_cup icon"
                  />
                </div>

                <div className=" ">
                  <div className="flex items-center justify-center pt-4">
                    <p className="mr-14">Chai Tea</p>
                    <div className=" border border-dotted w-40 mr-12 " />
                    <p>Ksh 250</p>
                  </div>
                  <div className="flex items-center justify-center  pt-4">
                    <p className="mr-12">Dawa Tea</p>
                    <div className=" border border-dotted w-40 mr-12 " />
                    <p>Ksh 500</p>
                  </div>
                  <div className="flex items-center justify-center  pt-4">
                    <p className="mr-10">Kenyan Tea</p>
                    <div className=" border border-dotted w-40 mr-12 " />
                    <p>Ksh 270</p>
                  </div>
                  <div className="flex items-center justify-center pt-4">
                    <p className="mr-[60px]">Hibiscus</p>
                    <div className=" border border-dotted w-40 mr-12 " />
                    <p>Ksh 450</p>
                  </div>
                  <div className="flex items-center justify-center  pt-4">
                    <p className="mr-[22px]">Tangawizi Tea</p>
                    <div className=" border border-dotted w-40 mr-12 " />
                    <p>Ksh 250</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Menu 2 */}
          <div className="shadow-xl ring-1 ring-white rounded-md  overflow-hidden break-all bg-[url('/assets/images/soft_drinks.svg')] w-full h-[253px] bg-cover bg-no-repeat relative">
            <div className="bg-black w-full h-full bg-opacity-50">
              <div className="absolute">
                {/* menu 2 heading */}
                <div className="flex items-center justify-center space-x-2 w-[610px] mx-auto pt-6">
                  <h2 className="text-lg">Soft Drinks</h2>
                  <Image
                    src={"/assets/icons/softdrinks.svg"}
                    width={0}
                    height={0}
                    className="w-5 h-5"
                    alt="tea_cup icon"
                  />
                </div>
                {/* menu 2 content */}
                <div className="pt-2">
                  <div className="flex items-center justify-around">
                    <p>Orange Juice</p>
                    <div className="border border-dotted w-40" />
                    <p>Ksh 550</p>
                  </div>
                  <div className="flex items-center justify-around pt-4">
                    <p>Passion Juice</p>
                    <div className="border border-dotted w-40" />
                    <p>Ksh 650</p>
                  </div>
                  <div className="flex items-center justify-around pt-4">
                    <p>Delmonte Juice</p>
                    <div className="border border-dotted w-40" />
                    <p>Ksh 850</p>
                  </div>
                  <div className="flex items-center justify-around pt-4">
                    <p>Pineapple Juice</p>
                    <div className="border border-dotted w-40" />
                    <p>Ksh 750</p>
                  </div>
                  <div className="flex items-center justify-around pt-4">
                    <p>Water Melon Juice</p>
                    <div className="border border-dotted w-40" />
                    <p>Ksh 250</p>
                  </div>
                </div>
              </div>
            </div>
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
