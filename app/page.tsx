import Image from "next/image";

import {
  CreditCard,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Truck,
  XCircle,
} from "lucide-react";

export const runtime = "edge";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ canceled?: boolean }>;
}) {
  const { canceled } = await searchParams;

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      <header className="py-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-rose-400 drop-shadow">
          Postcard Polska
        </h1>

        <p className="text-sm mt-2 text-gray-400 italic">Sealed with love 💌</p>
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <section className="flex flex-col lg:flex-row justify-center gap-6 bg-gray-800 rounded-3xl shadow-xl overflow-hidden p-4">
          {[
            "/warszawska_syrenka_postcard_front.JPG",
            "/warszawska_syrenka_postcard_photo_w_miasto.JPG",
          ].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Warszawska Syrenka Postcard ${
                idx === 0 ? "Front" : "Photo with City"
              }`}
              width={800}
              height={1000}
              className="rounded-xl object-cover w-full h-auto"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/B8AAosBxERSgsYAAAAASUVORK5CYII="
            />
          ))}
        </section>

        <article className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow uppercase tracking-wide">
              <Sparkles size={14} />
              Limited Edition
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-rose-400">
              Warszawska Syrenka Postcard
            </h2>

            <p className="text-gray-300 leading-relaxed">
              I’ve loved postcards for years — each one a surprise filled with
              charm, especially when it’s a message from a friend abroad.
              <br />
              <br />
              This one features an original illustration of the{" "}
              <strong>Warsaw Mermaid</strong> (Syrenka), hand-drawn by my sister
              and printed on thick, matte card.
            </p>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-gray-800 border border-rose-400 hover:border-rose-300 rounded-xl p-6 shadow-inner transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-lg font-semibold text-rose-200 flex items-center gap-2">
                  <ShoppingCart size={18} />
                  10 Postcards — <span className="font-bold">60 PLN</span>
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <Truck size={14} />
                  Free Poland delivery
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              {["Visa", "MasterCard", "BLIK"].map((label, idx) => (
                <span key={idx} className="flex items-center gap-1">
                  {label === "BLIK" ? (
                    <Smartphone size={14} />
                  ) : (
                    <CreditCard size={14} />
                  )}
                  {label}
                </span>
              ))}
            </div>

            <form action="/api/checkout_sessions" method="POST">
              <button
                type="submit"
                role="link"
                className="w-full sm:w-auto mt-4 bg-rose-500 hover:bg-rose-600 active:scale-95 transition-all text-white px-6 py-3 rounded-full font-medium shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </form>

            {canceled && (
              <p className="text-sm text-red-400 bg-red-900/30 p-3 rounded-md border border-red-600 flex items-center gap-2 mt-2">
                <XCircle size={16} />
                Order canceled — you can continue shopping when you’re ready.
              </p>
            )}
          </div>
        </article>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Postcard Polska
      </footer>
    </div>
  );
}
