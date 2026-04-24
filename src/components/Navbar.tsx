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
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "bg-cream border-2 border-ink shadow-pop" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="AverraCreations logo"
              className="h-14 w-14 object-contain animate-logo-spin group-hover:[animation-play-state:paused] group-hover:scale-110 transition-transform"
            />
            <span className="font-display text-xl tracking-tight">
              Averra<span className="text-crimson">.</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
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
            className="btn-pop bg-yellow text-ink text-sm py-2.5 px-5"
          >
            Let's Talk!
          </a>
        </nav>
      </div>
    </header>
  );
}
