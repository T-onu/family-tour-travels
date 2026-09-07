import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { formatINR, type Destination, type Package, getDestination } from "@/lib/data";

export function DestinationCard({ d }: { d: Destination }) {
  return (
    <Link
      to="/destinations/$slug"
      params={{ slug: d.slug }}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-soft"
    >
      <img
        src={d.image}
        alt={`${d.name}, ${d.state}`}
        width={1280}
        height={960}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="img-fade absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-ink-foreground">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{d.state}</p>
        <h3 className="mt-1 text-2xl font-semibold">{d.name}</h3>
        <p className="mt-1 line-clamp-1 text-sm text-ink-foreground/80">{d.tagline}</p>
        <p className="mt-3 text-sm font-semibold">From {formatINR(d.startingPrice)}</p>
      </div>
      <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

export function PackageCard({ p }: { p: Package }) {
  const dest = getDestination(p.destinationSlug);
  return (
    <Link
      to="/packages/$slug"
      params={{ slug: p.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          width={1280}
          height={960}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground">
          {p.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{dest?.name}</span>
          <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{p.duration}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold leading-snug">{p.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.summary}</p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="font-display text-2xl font-semibold text-primary">{formatINR(p.price)}</p>
          </div>
          <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">View details</span>
        </div>
      </div>
    </Link>
  );
}
