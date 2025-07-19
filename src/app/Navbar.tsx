"use client"

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Prevent scrolling when sidebar is open
  React.useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <nav
      className="w-full flex items-center justify-between py-2 fixed top-0 left-0 z-[100] h-14 transition-colors duration-300 text-white bg-black/60 md:bg-black/20 md:backdrop-blur-[5px]"
    >
      <div className="mx-auto w-[90%] flex flex-row items-center justify-between">

        <div className="flex items-center gap-2">
          <Image src="/logo-plombix.png" alt="logo" width={30} height={30} />
          <span className="font-league text-2xl font-bold">
            Plombier X<span className="text-[#00B8D9]">.</span>
          </span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-poppins">
          <li>
            <a
              href="#accueil"
              className="hover:underline"
              style={undefined}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:underline"
              style={undefined}
            >
              Nos Services
            </a>
          </li>
          <li>
            <a
              href="/tarifs"
              className="hover:underline"
              style={undefined}
            >
              Tarifs & Devis
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline"
              style={undefined}
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className={`hidden md:inline-block btn font-poppins text-sm px-5 py-2 hover:cursor-pointer hover:scale-105 transition-all text-black bg-white`}
        >
          Prendre rendez-vous
        </a>

        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setSidebarOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <span
            className={`block w-6 h-1 mb-1 rounded transition-all duration-200 bg-white`}
          ></span>
          <span
            className={`block w-6 h-1 mb-1 rounded  transition-all duration-200 bg-white`}
          ></span>
          <span
            className={`block w-6 h-1 rounded  transition-all duration-200 bg-white`}
          ></span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[9999] transition-all duration-300 ${
          sidebarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{
          background: sidebarOpen ? "rgba(0,0,0,0.4)" : "transparent",
          pointerEvents: sidebarOpen ? "auto" : "none",
        }}
        onClick={() => setSidebarOpen(false)}
      >
        <aside
          className={`fixed top-0 right-0 h-full w-screen max-w-full bg-white shadow-lg z-[10000] transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <Image src="/logo-plombierx.png" alt="logo" width={30} height={30} />
              <span className="font-league text-2xl font-bold text-black">
                Plombier X<span className="text-[#00B8D9]">.</span>
              </span>
            </div>
            <button
              className="text-2xl text-black focus:outline-none hover:cursor-pointer hover:scale-105"
              onClick={() => setSidebarOpen(false)}
              aria-label="Fermer le menu"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col gap-6 text-base font-poppins px-6 py-8 text-black">
            <li>
              <a
                href="#accueil"
                className="hover:underline"
                onClick={() => setSidebarOpen(false)}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline"
                onClick={() => setSidebarOpen(false)}
              >
                Nos Services
              </a>
            </li>
            <li>
              <a
                href="/tarifs"
                className="hover:underline"
                onClick={() => setSidebarOpen(false)}
              >
                Tarifs & Devis
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="px-6 pb-6">
            <a
              href="#contact"
              className="btn font-poppins text-sm w-full block text-center px-5 py-2 mt-4 bg-[#3338C3] text-white hover:scale-105 transition-all"
              onClick={() => setSidebarOpen(false)}
            >
              Prendre rendez-vous
            </a>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;