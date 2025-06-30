import Image from "next/image";
import Link from "next/link";

import { ShoppingCart, Truck, XCircle } from "lucide-react";

import { SwapperImage } from "./SwapperImage";
export const runtime = "edge";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ canceled?: boolean }>;
}) {
  const { canceled } = await searchParams;

  return (
    <div className="min-h-screen text-white font-sans relative overflow-hidden">
      <main className="flex flex-col items-center justify-center px-4 sm:px-8 py-8 relative z-10">
        <section className="mb-10 text-center max-w-3xl mx-auto px-6">
          <p className="text-sm sm:text-base text-yellow-400 uppercase tracking-widest font-semibold mb-2">
            New Series Launch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-500 to-amber-600 mb-6">
            A Postcard Series from Poland
          </h2>

          <div className="flex items-center justify-center mb-6">
            <Image
              src="/avatar.jpg"
              width={80}
              height={80}
              alt="Hamed"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4 ring-2 ring-white shadow-md transition-transform duration-300 hover:scale-105 hover:-rotate-3"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/B8AAosBxERSgsYAAAAASUVORK5CYII="
            />
            <span className="text-white font-medium text-lg sm:text-xl">
              Hamed
            </span>
            <Link href="https://postcrossing.com/user/herol3oy" target="_blank">
              <Image
                alt="postcrossing logo"
                src="/pc-logo.png"
                width={24}
                height={24}
                className="ml-2 opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I’m excited to introduce a series of illustrated postcards inspired
            by the stories of Poland. This is the{" "}
            <span className="relative text-yellow-300 font-semibold inline-block">
              very first postcard
              <svg
                className="absolute bottom-0 left-0 w-full h-2"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 C30,10 70,0 100,5"
                  stroke="#facc15"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>{" "}
            in the collection. Each one tells a unique story, and this one
            features the legendary{" "}
            <span className="relative inline-block text-yellow-300 font-semibold">
              Syrenka
              <svg
                className="absolute bottom-0 left-0 w-full h-2"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,7 C25,10 75,2 100,7"
                  stroke="#facc15"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>{" "}
            of Warsaw.
          </p>
        </section>

        <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl max-w-5xl w-full p-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <SwapperImage />
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-20">
                  #1
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex flex-col gap-2">
                <span className="max-w-fit gap-2 bg-blue-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  🥇 First Edition
                </span>
                <h2 className="text-4xl font-bold text-purple-400">
                  Syrenka Postcard
                  <span className="block text-2xl font-normal text-purple-300 mt-1">
                    Greetings from Warsaw
                  </span>
                </h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                I’ve always loved collecting postcards, especially those sent
                from friends abroad. They are small surprises that make me
                smile. Inspired by this, I teamed up with my sister, a talented
                illustrator, to create a unique postcard featuring the iconic
                Syrenka. I’m excited to share this first card in our new series.
                Send this first postcard in the series to someone you care about
                and add your own personal touch. It’s a simple way to show
                you’re thinking of them (and yes, my fridge is covered!)
              </p>

              <div className="flex flex-col gap-4 bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm p-5 rounded-xl shadow-inner">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gray-700/40 rounded-lg border border-gray-600/30">
                      <ShoppingCart size={20} className="text-purple-400/90" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400/90 tracking-wide">
                        POSTCARD SET
                      </p>
                      <p className="text-lg font-semibold text-white">
                        10 Cards •{" "}
                        <span className="text-purple-300">50 PLN</span>
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
                        Free <span className="text-gray-300">in Poland</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-gray-400 mb-2 ml-1">
                    PAYMENT METHODS
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "/logo-blik.svg",
                      "/logo-visa.svg",
                      "/logo-mastercard.svg",
                    ].map((url) => (
                      <Image
                        key={url}
                        width={35}
                        height={25}
                        src={url}
                        alt="payment logo"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <form action="/api/checkout_sessions" method="POST">
                <button
                  type="submit"
                  role="link"
                  className="w-full mt-4 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-transform duration-200 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-xl flex items-center justify-center gap-2"
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
    </div>
  );
}
