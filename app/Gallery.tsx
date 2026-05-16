"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface Product {
  id: string;
  src: string;
  title: string;
  description: string;
}

export function Gallery({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<number | null>(null);

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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product, i) => (
            <button
              type="button"
              key={product.id}
              onClick={() => setSelected(i)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 text-left w-full"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-stone-100">
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={i < 2}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-stone-900">
                  {product.title}
                </h3>
                <p className="text-sm text-stone-500 mt-1 leading-relaxed">
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

            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={products[selected].src}
                alt={products[selected].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
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
