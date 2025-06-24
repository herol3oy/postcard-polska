import Image from "next/image";

export const runtime = "edge";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ canceled: boolean }>;
}) {
  const { canceled } = await searchParams;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="w-full py-6 border-b border-gray-200 text-center">
        <h1 className="text-2xl font-bold text-rose-500">Postcard Polska</h1>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <section className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl shadow-xl overflow-hidden bg-gray-50">
          <figure className="h-full w-full bg-gray-100 aspect-[4/3] lg:aspect-auto flex items-center justify-center text-gray-400 text-sm relative">
            <Image
              src="/warszawska_syrenka_postcard_front.JPG"
              alt="Warszawska Syrenka Postcard front"
              width={600}
              height={833}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/B8AAosBxERSgsYAAAAASUVORK5CYII="
            />
          </figure>

          <article className="p-8 space-y-6">
            <h2 className="text-2xl font-semibold">
              Warszawska Syrenka Postcard
            </h2>
            <p className="text-gray-600">
              A beautifully printed postcard featuring the iconic Warsaw Mermaid
              — symbolic, stylish, and perfect for any collection. Printed on
              premium matte stock with love from Poland.
            </p>

            {canceled && (
              <p className="text-sm text-red-500">
                Order canceled — you can continue shopping when you’re ready.
              </p>
            )}

            <form action="/api/checkout_sessions" method="POST">
              <button
                type="submit"
                role="link"
                className="bg-rose-500 hover:bg-rose-600 transition text-white px-6 py-3 rounded-full font-medium shadow-md"
              >
                Buy Now
              </button>
            </form>
          </article>
        </section>
      </main>

      <footer className="w-full py-6 text-center text-sm text-gray-400">
        Stamped in Warsaw, sealed with love. 💌
      </footer>
    </div>
  );
}
