import { useEffect, useState } from "react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      aria-label="Book a call"
      className={`fixed bottom-6 right-6 z-40 group inline-flex items-center gap-3 rounded-full bg-crimson text-cream pl-5 pr-2 py-2 shadow-glow-red transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <span className="text-sm font-semibold">Book a slot</span>
      <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-crimson text-lg group-hover:rotate-45 transition-transform">
        →
      </span>
    </a>
  );
}
