import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
        <nav
          className={`flex items-center justify-between gap-3 rounded-full px-3 py-2.5 transition-all duration-500 sm:px-5 sm:py-3 ${
            scrolled ? "bg-cream border-2 border-ink shadow-pop" : ""
          }`}
        >
          <Link to="/" className="flex min-w-0 items-center gap-1.5 group sm:gap-2">
            <img
              src={logo}
              alt="AverraCreations logo"
              className="h-10 w-10 shrink-0 object-contain animate-logo-spin transition-transform group-hover:[animation-play-state:paused] group-hover:scale-110 sm:h-14 sm:w-14"
            />
            <span className="truncate font-display text-base tracking-tight sm:text-xl">
              Averra<span className="text-crimson">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm font-bold text-ink hover:text-crimson transition-colors rounded-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-pop shrink-0 bg-yellow text-ink px-3 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Let's Talk!
          </a>
        </nav>
      </div>
    </header>
  );
}
