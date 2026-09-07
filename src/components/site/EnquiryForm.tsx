import { CheckCircle2, Loader2, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { BUSINESS, telHref, whatsappHref } from "@/lib/business";
import { destinations } from "@/lib/data";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = { defaultDestination?: string; defaultPackage?: string };

export function EnquiryForm({ defaultDestination = "", defaultPackage }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [waLink, setWaLink] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    if (!name || !/^[0-9+\s-]{10,15}$/.test(phone)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const lines = [
      `Hi ${BUSINESS.name}, new trip enquiry:`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      defaultPackage ? `Package: ${defaultPackage}` : `Destination: ${fd.get("destination") || "Not decided"}`,
      `Travel dates: ${fd.get("dates") || "Flexible"}`,
      `Travellers: ${fd.get("travellers") || "-"}`,
      fd.get("message") ? `Notes: ${fd.get("message")}` : "",
    ].filter(Boolean);
    const link = whatsappHref(lines.join("\n"));
    setWaLink(link);
    window.setTimeout(() => {
      setStatus("done");
      window.open(link, "_blank", "noopener,noreferrer");
    }, 500);
  };

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto h-14 w-14 text-whatsapp" />
        <h3 className="mt-4 text-2xl font-semibold">Enquiry ready to send</h3>
        <p className="mt-2 text-muted-foreground">
          We've opened WhatsApp with your details prefilled. If it didn't open, use the button below — we reply within a few hours.
        </p>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground">
          <WhatsAppIcon className="h-5 w-5" /> Open WhatsApp
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Prefer to talk? <a href={telHref} className="font-semibold text-primary">{BUSINESS.phoneDisplay}</a>
        </p>
      </div>
    );
  }

  const input = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring transition focus:ring-2";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name <span className="text-primary">*</span>
          <input name="name" required autoComplete="name" className={`${input} mt-1.5`} placeholder="Full name" />
        </label>
        <label className="block text-sm font-medium">
          Phone / WhatsApp <span className="text-primary">*</span>
          <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" className={`${input} mt-1.5`} placeholder="10-digit mobile" />
        </label>
      </div>
      {defaultPackage ? (
        <div className="rounded-xl bg-accent px-4 py-3 text-sm">
          Enquiring about <span className="font-semibold">{defaultPackage}</span>
        </div>
      ) : (
        <label className="block text-sm font-medium">
          Destination
          <select name="destination" defaultValue={defaultDestination} className={`${input} mt-1.5`}>
            <option value="">Not decided yet</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>{d.name}</option>
            ))}
          </select>
        </label>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Travel dates
          <input name="dates" className={`${input} mt-1.5`} placeholder="e.g. 12–18 Oct" />
        </label>
        <label className="block text-sm font-medium">
          Travellers
          <input name="travellers" className={`${input} mt-1.5`} placeholder="2 adults, 1 child" />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Anything else?
        <textarea name="message" rows={3} className={`${input} mt-1.5 resize-none`} placeholder="Budget, hotel preference, special occasion…" />
      </label>
      {status === "error" && (
        <p className="rounded-xl bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive" role="alert">
          Please enter your name and a valid phone number.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:brightness-110 disabled:opacity-70"
      >
        {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <WhatsAppIcon className="h-5 w-5" />}
        Send enquiry on WhatsApp
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Or call <a href={telHref} className="inline-flex items-center gap-1 font-semibold text-primary"><Phone className="h-3 w-3" />{BUSINESS.phoneDisplay}</a>. No spam, ever.
      </p>
    </form>
  );
}
