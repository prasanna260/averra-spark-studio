import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Terms & Policies — AverraCreations" },
      {
        name: "description",
        content:
          "Refund & cancellation, terms and conditions, privacy policy, and shipping & delivery policy for AverraCreations.",
      },
      { property: "og:title", content: "Terms & Policies — AverraCreations" },
      {
        property: "og:description",
        content: "Read AverraCreations' refund, terms, privacy and delivery policies.",
      },
    ],
  }),
  component: PoliciesPage,
});

const sections = [
  {
    id: "refund",
    title: "Refund & Cancellation Policy",
    body: [
      "Cancellations or refunds will not be processed unless a prior notice of 30 days is provided.",
      "All refund requests must be submitted in writing via email. Any project cancellation must comply with the 30-day notice period to avoid penalties or additional charges.",
      "Failure to provide the required notice may result in partial or no refund, depending on the stage of the project.",
    ],
  },
  {
    id: "terms",
    title: "Terms and Conditions",
    body: [
      {
        h: "Introduction",
        p: "These Terms and Conditions govern the use of services provided by Averra, a digital services agency based in India and operating globally. By using our services, you agree to these terms.",
      },
      {
        h: "Scope of Services",
        p: "Averra provides services including branding, packaging, digital marketing, social media management, website development, automation, e-commerce activation, and content creation. By engaging with our services, you agree to the scope outlined here.",
      },
      {
        h: "Payment Terms",
        p: "All payments must be made in advance unless otherwise agreed. Work will begin only after payment confirmation. Failure to complete payment may result in delays, suspension, or cancellation of services.",
      },
      {
        h: "Intellectual Property",
        p: "All deliverables remain the property of Averra until full payment is received. After full payment, ownership rights are transferred to the client as agreed. Averra may showcase completed work in its portfolio unless otherwise requested.",
      },
      {
        h: "Limitation of Liability",
        p: "Averra will not be held responsible for any indirect or consequential damages arising from the use of its services, including business losses, data issues, or third-party platform problems.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      {
        h: "Data Collection",
        p: "Averra collects basic information such as names, contact details, and payment information for project management and service delivery. This information is collected with client consent.",
      },
      {
        h: "Data Sharing",
        p: "We do not share personal data with third parties except when required by law or for payment processing through secure platforms.",
      },
      {
        h: "Security",
        p: "Averra uses standard security measures to protect data. However, no system is completely secure, and full security cannot be guaranteed.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Delivery Policy",
    body: [
      "Averra provides digital services only and does not ship physical products.",
      "All deliverables, including branding files, marketing materials, and content, are shared digitally through email or cloud platforms such as Google Drive.",
      "Clients are responsible for ensuring they have access to receive these files.",
    ],
  },
];

function PoliciesPage() {
  return (
    <main className="relative min-h-screen bg-cream">
      <Navbar />
      <section className="relative overflow-hidden border-b-2 border-ink bg-yellow pb-16 pt-32 md:pb-20 md:pt-36">
        <div aria-hidden className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-crimson font-black mb-4">
            ✦ The fine print ✦
          </p>
          <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl md:text-7xl">
            Terms & Policies
          </h1>
          <p className="mt-5 max-w-2xl text-base font-bold text-ink/70 sm:text-lg">
            Everything you need to know about working with Averra — refunds, terms, privacy, and
            delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-8 lg:grid-cols-[220px_1fr]">
          {/* sticky TOC */}
          <aside className="self-start lg:sticky lg:top-28">
            <div className="card-pop rounded-2xl bg-cream p-5">
              <p className="text-[10px] uppercase tracking-widest text-crimson font-black mb-3">
                Jump to
              </p>
              <ul className="space-y-2 text-sm font-bold">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-ink transition-colors hover:text-crimson">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                to="/"
                className="mt-5 block text-xs font-black uppercase tracking-widest text-crimson hover:underline"
              >
                ← Back home
              </Link>
            </div>
          </aside>

          <div className="space-y-12">
            {sections.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="card-pop scroll-mt-28 rounded-3xl bg-cream p-5 sm:p-7 md:p-10"
              >
                <h2 className="mb-6 font-display text-2xl text-ink sm:text-3xl md:text-4xl">
                  {s.title}
                </h2>
                <div className="space-y-5 font-medium leading-relaxed text-ink/80">
                  {s.body.map((item, i) =>
                    typeof item === "string" ? (
                      <p key={i}>{item}</p>
                    ) : (
                      <div key={i}>
                        <h3 className="font-display text-lg text-ink mb-1">{item.h}</h3>
                        <p>{item.p}</p>
                      </div>
                    ),
                  )}
                </div>
              </article>
            ))}

            <p className="text-sm text-ink/60 font-medium">
              Questions? Email{" "}
              <a
                href="mailto:averracreations@gmail.com"
                className="text-crimson font-bold hover:underline"
              >
                averracreations@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
