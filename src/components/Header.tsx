import { navLinks } from "@/settings";
import { navLink } from "@/types";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="px-3 md:px-10 lg:px-20 py-5 bg-gray-100  sticky top-0 z-50">
      <nav className="flex flex-row justify-between items-center ">
        <Link href={"/"}>
          <h2 className="font-bold text-2xl">Taskly</h2>
        </Link>
        <ul className="flex flex-row justify-between gap-10">
          {navLinks.map((link: navLink) => (
            <li className="" key={link.key}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
