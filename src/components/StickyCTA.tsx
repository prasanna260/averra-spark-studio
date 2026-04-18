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
      className={`fixed bottom-6 right-6 z-40 btn-pop bg-yellow text-ink text-sm transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      Book a slot
      <span className="text-lg">→</span>
    </a>
  );
}
