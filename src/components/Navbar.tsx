import { useEffect, useState } from "react";

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
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink border-2 border-ink">
              <span className="font-display text-xl text-cream">A</span>
              <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-yellow border-2 border-ink animate-float-y" />
            </span>
            <span className="font-display text-xl tracking-tight">
              Averra<span className="text-crimson">.</span>
            </span>
          </a>

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
