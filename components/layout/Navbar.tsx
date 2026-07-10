"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <nav className="siteNav" aria-label="Primary navigation">
        <Link
          className="brandLink"
          href="/"
          onClick={() => setOpen(false)}
        >
          Magic Tool Box UK
        </Link>

        <button
          className="menuToggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "X" : "☰"}
        </button>

        <div
          className={`navLinks ${open ? "navLinksOpen" : ""}`}
          id="primary-menu"
        >
          {navLinks.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                className={`navLink ${active ? "navLinkActive" : ""}`}
                href={item.href}
                key={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;