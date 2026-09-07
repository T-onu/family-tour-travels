import { Phone } from "lucide-react";
import { telHref, whatsappHref } from "@/lib/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Bottom bar on mobile + floating WhatsApp bubble on desktop. */
export function StickyCTA({ message }: { message?: string }) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-border bg-border pb-[env(safe-area-inset-bottom)] lg:hidden">
        <a
          href={whatsappHref(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-whatsapp py-3.5 text-sm font-bold text-whatsapp-foreground"
        >
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </a>
        <a href={telHref} className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold text-primary-foreground">
          <Phone className="h-5 w-5" /> Call now
        </a>
      </div>

      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform hover:scale-105 lg:grid"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
