"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-primary-900 w-12 sm:w-16 lg:w-60">
      {/* Largura ajustável agora começa no 'lg' */}
      <ul className="flex flex-col gap-2 h-full text-lg relative">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              className={`py-3 px-3 sm:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              {/* Exibe o nome do link agora a partir do 'lg' */}
              <span className="hidden lg:inline">{link.name}</span>
            </Link>
            {/* Tooltip que aparece ao passar o mouse */}
            <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 group-hover:block bg-primary-900 text-primary-100 text-sm py-1 px-2 rounded-md transition-opacity duration-200 z-10">
              {link.name}
            </span>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
