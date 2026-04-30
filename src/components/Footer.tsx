import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const policyLinks = [
  { hash: "refund", label: "Refund & Cancellation" },
  { hash: "terms", label: "Terms & Conditions" },
  { hash: "privacy", label: "Privacy Policy" },
  { hash: "shipping", label: "Shipping & Delivery" },
];
const serviceLinks = [
  { to: "/social-media-marketing" as const, label: "Social Media Marketing" },
  { to: "/production-ad-shoot" as const, label: "Production Ad Shoot" },
  { to: "/content-creation" as const, label: "Content Creation" },
  { to: "/branding" as const, label: "Branding" },
  { to: "/averra-360" as const, label: "Averra 360" },
];
const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=averracreations@gmail.com";

export function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-cream sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-9 border-b-2 border-cream/20 pb-12 md:grid-cols-12 md:gap-10 md:pb-14">
          <div className="md:col-span-4">
            <Link to="/" className="mb-6 flex w-fit items-center gap-2 group">
              <img
                src={logo}
                alt="AverraCreations logo"
                loading="lazy"
                decoding="async"
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

          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-black uppercase tracking-widest text-yellow">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-bold">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-yellow">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 text-xs font-black uppercase tracking-widest text-yellow">
              Connect
            </h4>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <a
                  href="https://www.instagram.com/averracreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/JA3H2OYCSBSSL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC_3U_EJEYgEq2I7JxTvk6gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-black uppercase tracking-widest text-yellow">
              Get in touch
            </h4>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block break-all text-sm font-bold transition-colors hover:text-yellow"
            >
              averracreations@gmail.com
            </a>
            <p className="text-sm text-cream/60 font-medium">Sun · Fri · 9am to 12am</p>
          </div>
        </div>

        <div className="grid items-start gap-6 border-b-2 border-cream/20 pb-6 pt-10 md:grid-cols-2">
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

        <div className="flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
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
