import Image from "next/image";

export const runtime = "edge";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ canceled?: boolean }>;
}) {
  const { canceled } = await searchParams;

  return (
    <div className="min-h-screen flex  flex-col bg-[#111827] text-white font-sans">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-rose-400">
          Postcard Polska
        </h1>
        <p className="text-sm mt-1 text-gray-400">Sealed with love 💌</p>
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
              <div className=" max-w-max bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase">
                Limited Edition
              </div>
              <h2 className="text-3xl font-bold text-rose-400">
                Warszawska Syrenka Postcard
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I’ve loved postcards for years — each one a surprise filled with
                charm. Specially when it’s a message from a friend abroad. The
                postcard brings a magic to your mailbox.
                <br />
                <br />
                This one features an original illustration of the{" "}
                <strong>Warsaw Mermaid</strong> (Syrenka), drawn by my sister.
              </p>
            </div>

            <div className="bg-gray-800 border border-rose-400 rounded-xl p-6 space-y-3 shadow-inner">
              <p className="text-xl font-semibold text-rose-200">
                10 Printed Postcards — <span className="font-bold">60 PLN</span>
              </p>
              <p className="text-sm text-gray-400">
                Free delivery within Poland 🇵🇱
              </p>
            </div>

            {canceled && (
              <p className="text-sm text-red-400 bg-red-900/30 p-2 rounded-md border border-red-600">
                Order canceled — you can continue shopping when you’re ready.
              </p>
            )}

            <form action="/api/checkout_sessions" method="POST">
              <button
                type="submit"
                role="link"
                className="mt-4 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
              >
                Buy Now
              </button>
            </form>
          </article>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        All rights reserved &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
