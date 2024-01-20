import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

type Props = {};

const Header = (props: Props) => {


  
  return (
    <>
      <header className="flex justify-between sticky top-0 w-full z-50 items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
        <Link href="/" className="mr-10">
          <Image
            alt="logo"
            width={120}
            height={100}
            className="cursor-pointer dark:invert invert-0"
            src="/logo.png"
          />
        </Link>
        <div className="flex space-x-2">
          {/* genre dropdown */}
          <GenreDropdown />
          {/* searchbar */}
          <SearchInput />
          {/* themetoggler */}
          <ThemeToggler />
        </div>
      </header>
    </>
  );
};

export default Header;
