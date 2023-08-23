import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full py-9 ">
      <div className="text-white container mx-auto flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <Image
              src={"/assets/icons/logo.svg"}
              width={151}
              height={102}
              alt="logo"
              className="w-28"
            />
          </Link>
        </div>
        <div className="flex gap-8 text-lg">
          <Link href={"#"}>
            <h1>Home</h1>
          </Link>
          <Link href={"#"}>
            <h1>Menu</h1>
          </Link>
          <Link href={"#"}>
            <h1>Products</h1>
          </Link>
          <Link href={"#"}>
            <h1>Contact</h1>
          </Link>
        </div>
        <div className="flex gap-8">
          <Image
            src={"/assets/icons/search.svg"}
            width={20}
            height={20}
            alt="search"
            className="w-5 h-5"
          />
          <Image
            src={"/assets/icons/user.svg"}
            width={20}
            height={20}
            alt="user"
            className="w-5 h-5"
          />
          <Image
            src={"/assets/icons/heart.svg"}
            width={37}
            height={35}
            alt="heart"
            className="w-6 h-6"
          />
          <Image
            src={"/assets/icons/cart.svg"}
            width={37}
            height={37}
            alt="cart"
            className="w-6 h-6"
          />
          <Image
            src={"/assets/icons/lightmode.svg"}
            width={24}
            height={24}
            alt="light mode"
            className="w-5 h-5"
          />
        </div>
      </div>
    </nav>
  );
}
