"use client";
import React, { useEffect, useState, useRef } from "react";
import { Twirl as Hamburger } from "hamburger-react";

import Link from "next/link";
import { useMediaQuery, useOnClickOutside } from "usehooks-ts";

export default function Navbar() {
  const navigation = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Product", link: "/product" },
  ];

  const activePath = window.location.href.split("/")[3];
  const mobileMenuRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mediaScreen = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mediaScreen) {
      setIsOpen(false);
    }
  }, [mediaScreen]);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(mobileMenuRef, handleClickOutside);
  return (
    <header className="sticky top-0 py-8 z-50 mx-auto max-w-7xl px-4 tablet:px-6 laptop:px-8 flex justify-end tablet:justify-center items-center">
      <div
        ref={mobileMenuRef}
        className="flex w-full justify-end tablet:hidden relative"
      >
        <div
          className={`
            focus:outline-none focus-visible:ring-0 ${
              isScrolled
                ? "bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 rounded-lg ring-1 ring-white/20"
                : "bg-transparent"
            }`}
        >
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            direction="left"
            rounded
            color="#F5F5F7"
            hideOutline={true}
          />
        </div>
        {isOpen && (
          <div className="absolute inset-x-0 top-14 z-10 w-full transform">
            <div className="bg-secondary p-4 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col group gap-x-12">
              {navigation.map((item, i) => (
                <Link
                  key={i}
                  className={`cursor-pointer font-black inline-block px-4 py-1 text-2xl ${
                    activeIndex === item.id
                      ? "text-primary group-hover:text-tertiary/60 hover:!text-primary"
                      : "text-tertiary hover:!text-primary group-hover:text-tertiary/60"
                  }`}
                  href={item.link}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveIndex(item.id);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`items-center hidden justify-center px-8 py-1 group tablet:flex ${
          isScrolled
            ? "bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 rounded-lg ring-1 ring-white/20"
            : "bg-transparent"
        }`}
      >
        {navigation.map((item, i) => (
          <Link
            key={i}
            className={`cursor-pointer inline-block font-black px-4 py-1 text-lg ${
              activeIndex === item.id
                ? "text-secondary group-hover:text-tertiary/60 hover:!text-secondary"
                : "text-tertiary hover:!text-secondary group-hover:text-tertiary/60"
            }`}
            href={item.link}
            onClick={() => {
              setActiveIndex(item.id);
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
