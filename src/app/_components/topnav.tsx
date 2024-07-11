"use client";

import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-x1 flex w-full items-center justify-between p-4 font-semibold md:flex-row md:items-center md:justify-between">
      <div className="flex items-center">
        <a href="/">
          <button>
            <img
              src="/favicon.ico"
              alt="Logo"
              className="h-8 w-8 md:h-10 md:w-10"
            />
          </button>
        </a>
      </div>
      <div
        className={`space-x-4 font-montserrat md:flex ${isMenuOpen ? "block" : "hidden"}`}
      >
        <a href="/projects" className="hover:text-gray-700">
          Projects
        </a>
        <a href="/cv" className="hover:text-gray-700">
          CV
        </a>
        <a href="/marketplace" className="hover:text-gray-700">
          Marketplace
        </a>
      </div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton>
            <button className="text-sm md:text-base">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
      <div className="md:hidden">
        <button
          id="menu-btn"
          className="block focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
