"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavigationClient({ links, userLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referência para o menu
  const buttonRef = useRef(null); // Referência para o botão

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Fecha o menu se o clique for fora do menu ou do botão
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Adiciona o event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove o event listener ao desmontar
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative z-20">
      {/* Botão de Menu */}
      <div className="md:hidden" ref={buttonRef}>
        <button
          onClick={toggleMenu}
          className="text-white hover:text-accent-400 transition-colors focus:outline-none"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu Lateral - Vindo da direita */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full bg-primary-900 text-primary-50 w-48 transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start px-4 py-5 space-y-4">
          {/* Links do Menu */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block w-full px-4 py-2 text-lg hover:bg-accent-500 hover:text-primary-800 transition-colors"
              onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
            >
              {link.label}
            </Link>
          ))}
          {/* Link para a área do usuário */}
          <Link
            href={userLink.href}
            className="block w-full px-4 py-2 text-lg hover:bg-accent-500 hover:text-primary-800 flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
          >
            {userLink.image && (
              <img
                className="h-6 w-6 rounded-full"
                alt={userLink.name}
                src={userLink.image}
                referrerPolicy="no-referrer"
              />
            )}
            <span>{userLink.label}</span>
          </Link>
        </div>
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-accent-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={userLink.href}
            className="hover:text-accent-400 transition-colors flex items-center gap-2"
          >
            {userLink.image && (
              <img
                className="h-8 rounded-full"
                alt={userLink.name}
                src={userLink.image}
                referrerPolicy="no-referrer"
              />
            )}
            <span>{userLink.label}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
