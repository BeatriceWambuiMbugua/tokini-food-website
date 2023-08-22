import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full py-9">
      <div className="text-white container mx-auto flex justify-around">
        <div>
          <Link href={"/"}>
            <Image
              src={"/assets/icons/logo.svg"}
              width={151}
              height={102}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex gap-8">
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
            <h1>Contact US</h1>
          </Link>
        </div>
        <div className="flex gap-8">
          <Image
            src={"/assets/icons/search.svg"}
            width={20}
            height={20}
            alt="search"
          />
          <Image
            src={"/assets/icons/user.svg"}
            width={20}
            height={20}
            alt="user"
          />
          <Image
            src={"/assets/icons/heart.svg"}
            width={37}
            height={35}
            alt="heart"
          />
          <Image
            src={"/assets/icons/cart.svg"}
            width={37}
            height={37}
            alt="cart"
          />
          <Image
            src={"/assets/icons/lightmode.svg"}
            width={24}
            height={24}
            alt="light mode"
          />
        </div>
      </div>
    </nav>
  );
}
