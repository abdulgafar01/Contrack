"use client";

import React, { useState } from "react";
import { BarChart, Code2Icon, GithubIcon, Home, SettingsIcon, UserIcon, ChevronLeft, ChevronRight, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage collapsed state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const links = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Contributions", href: "/dashboard/contributions", icon: BarChart },
    { name: "Profile", href: "/dashboard/profile", icon: UserIcon },
    { name: "Github Finder", href: "/dashboard/githubfinder", icon: GithubIcon },
    { name: "OpenSource Projects", href: "/dashboard/opsprojects", icon: Code2Icon },
    { name: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
  ];

  return (
    <>
     <button
        onClick={openSidebar}
        className="fixed top-4 left-4  z-50 p-2 bg-blue-600 text-white rounded-md md:hidden"
      >
        {isSidebarOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
      </button>

    <aside
      className={clsx(
        "h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out fixed md:relative z-10",
        {
          "w-64": !isCollapsed, // Full width
          "w-20": isCollapsed, // Collapsed width
          'translate-x-0': isSidebarOpen,
          '-translate-x-full': !isSidebarOpen,
        },
        'md:translate-x-0'
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed ? (
          <Link href='/'
          className='mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 hover:bg-blue-700 text-white p-4 md:h-40'
          >
          <div className="text-xl text-center font-bold mb-8 md:w-40">ConTrack</div>
          </Link>
          
        ) : (
          <Link href="/" className="flex items-center justify-center">
             <span className="text-4xl text-blue-700">C</span>
          </Link>
        )}      
      </div>

      <button
          onClick={toggleSidebar}
          className="p-3  rounded-md m-2 cursor-pointer relative  bg-blue-600 group"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {/* Tooltip for the toggle button */}
          <span className="absolute left-6 -top-6 bg-gray-800 w-40 text-white text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {isCollapsed ? "Open Sidebar" : "Close Sidebar"}
          </span>
        </button>
      {/* Navigation Links */}
      <nav className="p-4 space-y-2">

        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex items-center gap-2 p-3 rounded-md text-sm font-medium transition-colors relative group",
                {
                  "bg-sky-100 text-blue-600": pathname === link.href, // Active link
                  "hover:bg-gray-100": pathname !== link.href, // Inactive link
                  "justify-center": isCollapsed, // Center icons when collapsed
                }
              )}
            >
              <LinkIcon className="w-5 h-5" />
              {!isCollapsed && <span>{link.name}</span>}
              {/* Tooltip for collapsed sidebar */}
              {isCollapsed && (
                <span className="absolute left-16 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {link.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;