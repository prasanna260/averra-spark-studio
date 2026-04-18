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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground">
              <span className="font-display text-xl font-bold text-cream">A</span>
              <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-gold animate-float-y" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Averra<span className="text-crimson">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium text-ink-soft hover:text-foreground transition-colors rounded-full hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-cream hover:bg-crimson transition-colors"
          >
            Let's Talk
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
