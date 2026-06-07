"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface Product {
  id: string;
  src: string;
  title: string;
  description: string;
}

export function Gallery({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleClose = useCallback(() => setSelected(null), []);
  const handlePrev = useCallback(
    () => setSelected((s) => (s !== null && s > 0 ? s - 1 : s)),
    [],
  );
  const handleNext = useCallback(
    () =>
      setSelected((s) => (s !== null && s < products.length - 1 ? s + 1 : s)),
    [products.length],
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      touchEndX.current = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) handleNext();
        else handlePrev();
      }
    },
    [handleNext, handlePrev],
  );

  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selected, handleClose, handlePrev, handleNext]);

  return (
    <>
      <section className="px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-200">
          {products.map((product, i) => (
            <button
              type="button"
              key={product.id}
              onClick={() => setSelected(i)}
              className="group bg-stone-50 text-left w-full overflow-hidden"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-stone-100">
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={i < 4}
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm text-stone-900">
                  {product.title}
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  {product.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selected !== null && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/80" />

          <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-8">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {selected > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Previous"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {selected < products.length - 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Next"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            <div
              className="relative w-full max-w-5xl h-[80vh]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={products[selected].src}
                alt={products[selected].title}
                fill
                className="object-contain select-none"
                sizes="100vw"
                priority
                draggable={false}
              />
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {selected + 1} / {products.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
