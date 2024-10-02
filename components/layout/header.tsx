"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import HeaderImage from "@/public/images/header image.svg";
import ToggleButton from "../toggle-button";

function Header() {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsChecked(!isChecked);
    localStorage.setItem("isChecked", JSON.stringify(!isChecked));
  };

  useEffect(() => {
    const storedIsChecked = localStorage.getItem("isChecked");
    if (storedIsChecked !== null) {
      setIsChecked(JSON.parse(storedIsChecked));
    }
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    hamburger?.addEventListener("click", toggleMenu);

    return () => {
      hamburger?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <header className="bg-gray-100 dark:bg-[#000000] fixed top-0 w-full z-50">
        <nav className="flex flex-wrap items-center justify-between p-4 lg:px-20">
          <div>
            <Link href={"/"}>
              <Image
                src={HeaderImage}
                className="dark:bg-white w-[150px] lg:w-[180px]"
                alt="header-image"
                width={200}
                height={45}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <div className="lg:hidden sm:gap-4 w-[4rem] justify-between items-center my-4 flex">
              <ToggleButton isChecked={isChecked} handleChange={handleChange} />
            </div>
            <button ref={hamburgerRef} id="hamburger">
              <Image
                className={`toggle block dark:bg-white ${
                  isMenuOpen ? "hidden" : "block"
                }`}
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width={40}
                height={40}
                alt="icon"
              />
              <Image
                className={`toggle ${
                  isMenuOpen ? "block" : "hidden"
                } dark:bg-white`}
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width={40}
                height={40}
                alt="icon"
                onClick={toggleMenu}
              />
            </button>
          </div>
          <div
            className={`toggle w-full lg:w-auto flex-col lg:flex-row lg:flex items-center justify-between gap-4 lg:gap-7 text-bold mt-5 md:mt-0 md:border-none ${
              isMenuOpen ? "flex animate-slideDown" : "hidden lg:flex"
            } ${!isMenuOpen && "animate-slideUp lg:animate-none"}`}
          >
            <Link
              href="/"
              className="block text-[18px] text-center dark:text-white"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/pages/about-us"
              className="block text-[18px] text-center dark:text-white"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="/pages/contact-us"
              className="block text-[18px] text-center dark:text-white"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <div className="lg:flex sm:gap-4 w-[4rem] justify-between items-center my-4 hidden">
              <ToggleButton isChecked={isChecked} handleChange={handleChange} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
