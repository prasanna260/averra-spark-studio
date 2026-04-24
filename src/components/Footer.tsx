import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const policyLinks = [
  { hash: "refund", label: "Refund & Cancellation" },
  { hash: "terms", label: "Terms & Conditions" },
  { hash: "privacy", label: "Privacy Policy" },
  { hash: "shipping", label: "Shipping & Delivery" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b-2 border-cream/20">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
              <img
                src={logo}
                alt="AverraCreations logo"
                className="h-14 w-14 object-contain transition-transform group-hover:-rotate-6"
              />
              <span className="font-display text-2xl">
                Averra<span className="text-yellow">.</span>
              </span>
            </Link>
            <p className="text-cream/70 max-w-sm leading-relaxed font-medium">
              A full-stack creative studio building brands the internet can&apos;t scroll past.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-yellow font-black mb-4">Studio</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#services" className="hover:text-yellow transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-yellow transition-colors">Work</a></li>
              <li><a href="#process" className="hover:text-yellow transition-colors">Process</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-yellow font-black mb-4">Connect</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="https://www.instagram.com/averracreations" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">Instagram</a></li>
              <li><a href="https://wa.me/message/JA3H2OYCSBSSL1" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">WhatsApp</a></li>
              <li><a href="https://www.youtube.com/channel/UC_3U_EJEYgEq2I7JxTvk6gg" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">YouTube</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-yellow font-black mb-4">Get in touch</h4>
            <a href="mailto:averracreations@gmail.com" className="block text-sm font-bold hover:text-yellow transition-colors mb-2">
              averracreations@gmail.com
            </a>
            <p className="text-sm text-cream/60 font-medium">Sun · Fri · 9am to 12am</p>
          </div>
        </div>

        <div className="pt-10 pb-6 grid md:grid-cols-2 gap-6 items-start border-b-2 border-cream/20">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-yellow font-black mb-4">
              Terms & Policies
            </h4>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
              {policyLinks.map((p) => (
                <li key={p.hash}>
                  <Link
                    to="/policies"
                    hash={p.hash}
                    className="hover:text-yellow transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <Link
              to="/policies"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-yellow hover:underline"
            >
              Read full Terms & Policies →
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-xs text-cream/60 font-medium">
            © {new Date().getFullYear()} AverraCreations. Made loud, made bold.
          </p>
          <div className="flex items-center gap-2 text-xs text-cream/60 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
            Currently accepting Q1 partnerships
          </div>
        </div>
      </div>

      <div className="mt-16 overflow-hidden">
        <div className="font-display text-[18vw] leading-none text-center text-yellow/15 select-none">
          AVERRA
        </div>
      </div>
    </footer>
  );
}
