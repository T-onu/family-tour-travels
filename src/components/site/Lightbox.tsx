import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Item = { src: string; alt: string; w: number; h: number };

export function Gallery({ items }: { items: Item[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? null : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 lg:gap-4">
        {items.map((it, i) => (
          <button
            key={it.src + i}
            type="button"
            onClick={() => setIndex(i)}
            className="group mb-3 block w-full overflow-hidden rounded-xl bg-muted lg:mb-4"
            aria-label={`Open image: ${it.alt}`}
          >
            <img
              src={it.src}
              alt={it.alt}
              width={it.w}
              height={it.h}
              loading="lazy"
              className="w-full transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {index !== null && items[index] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 animate-in fade-in duration-200"
          onClick={close}
        >
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-ink-foreground/10 text-ink-foreground">
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink-foreground/10 text-ink-foreground md:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={items[index]!.src} alt={items[index]!.alt} className="max-h-[80vh] w-auto rounded-lg object-contain" />
            <figcaption className="mt-3 text-center text-sm text-ink-foreground/80">
              {items[index]!.alt} · {index + 1}/{items.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink-foreground/10 text-ink-foreground md:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
