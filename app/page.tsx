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
    <div className="min-h-screen flex flex-col bg-[#111827] text-white font-sans">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-rose-400 drop-shadow-sm">
          Postcard Polska
        </h1>
        <p className="text-sm mt-2 text-gray-400 italic">Sealed with love 💌</p>
      </header>

      <main className="flex-grow px-4 sm:px-8 py-12">
        <section className="max-w-6xl mx-auto bg-[#1f2937] rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0">
          <figure className="bg-gray-800">
            <Image
              src="/warszawska_syrenka_postcard_front.JPG"
              alt="Warszawska Syrenka Postcard front"
              width={800}
              height={1000}
              className="object-cover w-full h-full"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/B8AAosBxERSgsYAAAAASUVORK5CYII="
            />
          </figure>

          <article className="p-8 sm:p-10 space-y-6 flex flex-col justify-center">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                <Sparkles size={14} />
                <span>Limited Edition</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-rose-400">
                Warszawska Syrenka Postcard
              </h2>

              <p className="text-gray-300 leading-relaxed">
                I’ve loved postcards for years — each one a surprise filled with
                charm, especially when it’s a message from a friend abroad.
                <br />
                <br />
                This one features an original illustration of the{" "}
                <strong>Warsaw Mermaid</strong> (Syrenka), hand-drawn by my
                sister and printed on thick, matte card.
              </p>
            </div>

            <div className="bg-gray-800 border border-rose-400 rounded-xl px-4 py-4 sm:p-6 space-y-2 sm:space-y-3 shadow-inner transition-colors duration-300 hover:border-rose-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
                <p className="text-lg sm:text-xl font-semibold text-rose-200 flex items-center gap-2">
                  <ShoppingCart size={18} />
                  10 Postcards — <span className="font-bold">60 PLN</span>
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <Truck size={14} />
                  Free Poland delivery
                </p>
              </div>
            </div>

            {canceled && (
              <p className="text-sm text-red-400 bg-red-900/30 p-3 rounded-md border border-red-600 flex items-center gap-2">
                <XCircle size={16} />
                Order canceled — you can continue shopping when you’re ready.
              </p>
            )}

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span className="flex items-center gap-1">
                <CreditCard size={14} />
                Visa
              </span>
              <span className="flex items-center gap-1">
                <CreditCard size={14} />
                MasterCard
              </span>
              <span className="flex items-center gap-1">
                <Smartphone size={14} />
                BLIK
              </span>
            </div>

            <form action="/api/checkout_sessions" method="POST">
              <button
                type="submit"
                role="link"
                className="mt-4 bg-gradient-to-r bg-rose-500 active:scale-95 transition-all duration-300 text-white px-6 py-3 rounded-full font-medium shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </form>
          </article>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Postcard Polska — All rights reserved
      </footer>
    </div>
  );
}
