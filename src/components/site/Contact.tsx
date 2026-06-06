import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Reveal } from "./Reveal";
import { Mail, MessageCircle, Linkedin, MapPin, Check } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
};

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company") || undefined,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});

    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      setSubmitError("Email service is not configured. Please email us directly.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          company: parsed.data.company ?? "",
          message: parsed.data.message,
          reply_to: parsed.data.email,
        },
        { publicKey: EMAILJS.publicKey },
      );
      setSent(true);
    } catch (err) {
      console.error("[Contact] EmailJS send failed:", err);
      setSubmitError("Something went wrong sending your message. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 border-t border-border bg-white/[0.01]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <Reveal>
          <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 10 ] Contact</div>
          <h2 className="text-4xl md:text-6xl font-display uppercase mb-8 leading-none">Start the conversation</h2>
          <p className="text-muted-foreground mb-12 max-w-md leading-relaxed">
            Tell us about your product, your timeline, and where you're stuck. We respond within one business day.
          </p>

          <ul className="space-y-6">
            {[
              { i: Mail, l: "Email", v: "hello.dhruboit@gmail.com" },
              { i: MapPin, l: "Operations", v: "Remote — EU, US, APAC" },
              { i: MapPin, l: "Book a One to One Metting", v: <a className="text-[#00FFC2]" target="_blank" href="https://calendly.com/hello-dhruboit/30min">Click Here to Book</a> },
            ].map((c) => (
              <li key={c.l} className="flex items-start gap-4 border-b border-border pb-6">
                <c.i className="size-5 text-accent mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{c.l}</div>
                  <div className="text-sm font-bold tracking-wide">{c.v}</div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="border border-border p-8 md:p-10 space-y-6" noValidate>
            {sent ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="size-14 border border-accent text-accent flex items-center justify-center mb-6">
                  <Check className="size-7" />
                </div>
                <h3 className="text-2xl font-display uppercase mb-3">Transmission received</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  We've logged your message. Expect a reply from a senior engineer within one business day.
                </p>
              </div>
            ) : (
              <>
                {[
                  { id: "name", l: "Your Name", type: "text", required: true },
                  { id: "email", l: "Email", type: "email", required: true },
                  { id: "company", l: "Company (optional)", type: "text" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                      {f.l}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.required}
                      className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-sm transition-colors"
                    />
                    {errors[f.id] && <p className="text-[10px] text-destructive mt-2">{errors[f.id]}</p>}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                    Project Brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-sm resize-none transition-colors"
                  />
                  {errors.message && <p className="text-[10px] text-destructive mt-2">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 bg-accent text-accent-foreground font-bold uppercase text-xs tracking-widest hover:invert transition-all duration-300 mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Transmitting..." : "Transmit Brief"} {"->"}
                </button>
                {submitError && (
                  <p className="text-[10px] text-destructive mt-2 text-center">{submitError}</p>
                )}
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
