import {
  CreditCard,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Truck,
  XCircle,
} from "lucide-react";

import { SwapperImage } from "./SwapperImage";

export const runtime = "edge";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ canceled?: boolean }>;
}) {
  const { canceled } = await searchParams;

  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-900 text-white font-sans relative overflow-hidden">
      <header className="text-center py-8 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-rose-600 drop-shadow-sm">
          Postcard Polska
        </h1>
        <small className="text-base sm:text-lg mt-3 text-gray-500 italic">
          Sealed with love 💌
        </small>
      </header>

      <main className="flex flex-col items-center justify-center px-4 sm:px-8 py-8 relative z-10">
        <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl max-w-5xl w-full p-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <SwapperImage />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <span className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                <Sparkles size={14} />
                Limited Print
              </span>

              <h2 className="text-4xl font-bold text-rose-500">
                Warszawska Syrenka Postcard
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                A tribute to Warsaw’s iconic <strong>Syrenka</strong>. This
                postcard was hand-illustrated and printed on premium matte
                stock.
              </p>

              <div className="flex flex-col gap-4 bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm p-5 rounded-xl shadow-inner">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gray-700/40 rounded-lg border border-gray-600/30">
                      <ShoppingCart size={20} className="text-rose-400/90" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400/90 tracking-wide">
                        POSTCARD SET
                      </p>
                      <p className="text-lg font-semibold text-white">
                        10 Cards • <span className="text-rose-300">60 PLN</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gray-700/40 rounded-lg border border-gray-600/30">
                      <Truck size={20} className="text-indigo-400/90" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400/90 tracking-wide">
                        DELIVERY
                      </p>
                      <p className="text-base font-medium text-white">
                        Free <span className="text-gray-300">in Poland</span> •
                        2-3 days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-gray-400 mb-2 ml-1">
                    PAYMENT METHODS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["BLIK", "Visa", "MasterCard"].map((label, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 bg-gray-700/50 px-3 py-1.5 rounded-lg text-sm border border-gray-600/40 hover:border-gray-500/60 transition-colors"
                      >
                        {label === "BLIK" ? (
                          <Smartphone size={14} className="text-blue-400/90" />
                        ) : (
                          <CreditCard size={14} className="text-amber-400/90" />
                        )}
                        <span className="font-medium text-gray-200">
                          {label}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <form action="/api/checkout_sessions" method="POST">
                <button
                  type="submit"
                  role="link"
                  className="w-full mt-4 bg-rose-600 hover:bg-rose-700 active:scale-95 transition-transform duration-200 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Buy Now
                </button>
              </form>

              {canceled && (
                <div className="bg-red-800/30 text-red-300 border border-red-500/40 rounded-md p-3 flex items-center gap-2 text-sm mt-2">
                  <XCircle size={16} />
                  Order canceled — you can continue shopping anytime.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 mt-12 border-t border-gray-500/20 relative z-10">
        &copy; {new Date().getFullYear()} Postcard Polska.
      </footer>
    </div>
  );
}
