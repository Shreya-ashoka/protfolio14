"use client"; // This is a client-side component
import React, { useState } from "react";
import { Link } from "react-scroll/modules"; // For smooth scrolling navigation
import { usePathname } from "next/navigation"; // To handle active paths
import { useTheme } from "next-themes"; // For theme switching between light and dark mode
import { RiMoonFill, RiSunLine } from "react-icons/ri"; // Icons for theme switch
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Icons for menu open/close

// Define the navigation items
interface NavItem {
  label: string;
  page: string;
}

// Navigation items array including Internship and Certification Section
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Internship", 
    page: "internship", 
  },
  {
    label: "Achievement",
    page: "achievement"
  },
  {
    label: "Certifications",
    page: "certifications"
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Shreya Ashoka</h2> {/* Name/Logo */}
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page} // Scroll to the corresponding section on click
                    className={
                      "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    }
                    activeClass="active" // Active class to highlight the current section
                    spy={true} // To make it active when scrolling
                    smooth={true} // Smooth scroll
                    offset={-100} // Adjusting the scroll position
                    duration={500} // Duration of the scroll effect
                    onClick={() => setNavbar(!navbar)} // Close the menu on click (mobile)
                  >
                    {item.label} {/* Display the label */}
                  </Link>
                );
              })}

              {/* Theme switcher */}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")} // Switch to light theme
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")} // Switch to dark theme
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
