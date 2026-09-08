import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import logoIcon from "@/assets/logo-icon.png";
import { BUSINESS, telHref, whatsappHref } from "@/lib/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2" aria-label={`${BUSINESS.name} home`}>
          <img src={logoIcon} alt="" className="h-10 w-auto shrink-0 md:h-12" />
          <span className="truncate font-display text-base font-semibold leading-none sm:text-lg md:text-xl">
            <span className="sm:hidden">{BUSINESS.shortName}</span>
            <span className="hidden sm:inline">{BUSINESS.name}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-sm font-semibold text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" /> Enquire
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-background p-6 shadow-lift animate-in slide-in-from-right duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <img src={logoIcon} alt="" className="h-9 w-auto" />
                  <span className="font-display text-lg font-semibold leading-none">{BUSINESS.shortName}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 font-display text-2xl font-medium text-foreground/85 hover:bg-accent"
                    activeProps={{ className: "rounded-xl px-3 py-3 font-display text-2xl font-semibold text-primary bg-accent" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto space-y-2">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 font-semibold text-whatsapp-foreground"
                >
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
                </a>
                <a
                  href={telHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-border py-3 font-semibold"
                >
                  <Phone className="h-5 w-5" /> {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
