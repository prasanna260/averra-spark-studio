export function Footer() {
  return (
    <footer className="bg-foreground text-cream pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-cream/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-cream">
                <span className="font-display text-xl font-bold text-foreground">A</span>
              </span>
              <span className="font-display text-2xl font-semibold">
                Averra<span className="text-gold">.</span>
              </span>
            </div>
            <p className="text-cream/70 max-w-sm leading-relaxed">
              A full-stack creative studio building brands the internet can&apos;t scroll past.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Studio</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-gold transition-colors">Work</a></li>
              <li><a href="#process" className="hover:text-gold transition-colors">Process</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Behance</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Get in touch</h4>
            <a href="mailto:hello@averracreations.com" className="block text-sm hover:text-gold transition-colors mb-2">
              hello@averracreations.com
            </a>
            <p className="text-sm text-cream/60">Mon–Fri · 10am to 7pm IST</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} AverraCreations. Crafted with crimson, emerald & gold.
          </p>
          <div className="flex items-center gap-2 text-xs text-cream/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
            Currently accepting Q1 partnerships
          </div>
        </div>
      </div>

      {/* giant outro wordmark */}
      <div className="mt-16 overflow-hidden">
        <div className="font-display text-[18vw] leading-none font-semibold text-center bg-gradient-to-b from-cream/20 to-transparent bg-clip-text text-transparent select-none">
          AVERRA
        </div>
      </div>
    </footer>
  );
}
