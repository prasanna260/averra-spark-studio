import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "Averracreations@gmail.com";

type ServiceContactFormProps = {
  serviceTitle: string;
  pillClass: string;
};

export function ServiceContactForm({ serviceTitle, pillClass }: ServiceContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(`Project enquiry · ${serviceTitle}`);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim() || `Project enquiry · ${serviceTitle}`;
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError("Please fill in your name, email and message.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!emailOk) {
      setError("That email looks off — please double-check.");
      return;
    }

    if (trimmedName.length > 100 || trimmedEmail.length > 255 || trimmedSubject.length > 150 || trimmedMessage.length > 2000) {
      setError("One of the fields is too long. Please shorten it.");
      return;
    }

    const body = `Name: ${trimmedName}%0D%0AEmail: ${trimmedEmail}%0D%0AService: ${serviceTitle}%0D%0A%0D%0A${encodeURIComponent(
      trimmedMessage,
    )}`;

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      trimmedSubject,
    )}&body=${body}`;

    window.location.href = href;
  }

  const inputBase =
    "w-full bg-cream text-ink placeholder:text-ink/45 border-2 border-ink rounded-2xl px-5 py-4 font-medium text-base focus:outline-none focus:ring-4 focus:ring-yellow transition-shadow";

  return (
    <div className="rounded-[2rem] overflow-hidden border-2 border-ink card-pop bg-cream">
      {/* Header band */}
      <div className="bg-ink text-cream px-7 md:px-10 py-8 md:py-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className={`rounded-full border-2 border-ink px-3 py-1.5 text-[10px] font-black uppercase tracking-wider ${pillClass}`}
          >
            Contact
          </span>
          <span className="rounded-full border-2 border-ink bg-yellow text-ink px-3 py-1.5 text-[10px] font-black uppercase tracking-wider">
            Replies in 1 working day
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[0.95]">
          We'd love to hear <span className="text-yellow">from you.</span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-cream/75 max-w-2xl">
          Tell us about <span className="text-yellow font-bold">{serviceTitle}</span> — drop a
          message below or email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline decoration-yellow underline-offset-4 font-bold hover:text-yellow">
            {CONTACT_EMAIL}
          </a>
          . We'll get back to you right away.
        </p>
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit} noValidate className="bg-cream px-7 md:px-10 py-8 md:py-10">
        <div className="grid gap-4">
          <div>
            <label htmlFor="cf-name" className="sr-only">
              Name
            </label>
            <input
              id="cf-name"
              type="text"
              autoComplete="name"
              maxLength={100}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="cf-email" className="sr-only">
              Email Address
            </label>
            <input
              id="cf-email"
              type="email"
              autoComplete="email"
              maxLength={255}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="cf-subject" className="sr-only">
              Subject
            </label>
            <input
              id="cf-subject"
              type="text"
              maxLength={150}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="cf-message" className="sr-only">
              Message
            </label>
            <textarea
              id="cf-message"
              required
              maxLength={2000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows={6}
              className={`${inputBase} resize-y min-h-[160px]`}
            />
          </div>

          {error && (
            <p className="text-sm font-bold text-crimson border-2 border-crimson rounded-xl px-4 py-3 bg-crimson/5">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 w-full bg-ink text-cream font-display text-2xl md:text-3xl tracking-[0.2em] uppercase rounded-2xl border-2 border-ink py-5 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-crimson focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow"
          >
            Send →
          </button>
        </div>
      </form>
    </div>
  );
}
