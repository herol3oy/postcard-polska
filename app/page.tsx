import { Gallery } from "./Gallery";

interface Product {
  id: string;
  src: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    id: "postcard",
    src: "/gallery/warszawska_syrenka_postcard_mockup.webp",
    title: "Warsaw Postcard",
    description: "Premium illustrated postcard featuring the iconic Syrenka",
  },
  {
    id: "tshirt",
    src: "/gallery/t-shirt-1.jpg",
    title: "Cotton T-Shirt",
    description: "Comfortable cotton tee with original Syrenka design",
  },
  {
    id: "mug",
    src: "/gallery/cup.jpg",
    title: "Signature Mug",
    description: "Ceramic mug with the Warsaw mermaid illustration",
  },
  {
    id: "sticker",
    src: "/gallery/sticker-type.png",
    title: "Vinyl Sticker",
    description: "Durable sticker with original artwork",
  },
  {
    id: "socks-1",
    src: "/gallery/socks-1.png",
    title: "Designer Socks",
    description: "Variant 1 — premium cotton blend",
  },
  {
    id: "socks-2",
    src: "/gallery/socks-2.png",
    title: "Designer Socks",
    description: "Variant 2 — premium cotton blend",
  },
  {
    id: "socks-3",
    src: "/gallery/socks-3.png",
    title: "Designer Socks",
    description: "Variant 3 — premium cotton blend",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="text-center py-16 sm:py-24 px-6">
        <h2 className="text-4xl sm:text-5xl sm:text-6xl font-bold tracking-tight text-stone-900 mb-6">
          Our Collection
        </h2>
        <p className="text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto">
          A series of illustrated products inspired by the stories of Poland.
          Each piece features original artwork, crafted with care and printed on
          premium materials.
        </p>
      </section>

      <Gallery products={products} />

      <section className="bg-purple-700 text-white text-center py-16 sm:py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Wholesale Inquiries
          </h2>
          <p className="text-purple-100 mb-8 leading-relaxed text-lg">
            Interested in stocking our products in your shop? We offer wholesale
            pricing and custom orders. Get in touch with us.
          </p>
          <a
            href="mailto:info@postcardpolska.pl"
            className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors shadow-md"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
