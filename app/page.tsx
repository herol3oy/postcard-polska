import { Playfair_Display } from "next/font/google";
import { Gallery } from "./Gallery";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

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
    title: "Warszawska Pocztówka",
    description: "Wysokiej jakości ilustrowana pocztówka z kultową Syrenką",
  },
  {
    id: "tshirt",
    src: "/gallery/t-shirt-1.jpg",
    title: "Bawełniana Koszulka",
    description: "Wygodny bawełniany t-shirt z oryginalnym wzorem Syrenki",
  },
  {
    id: "mug",
    src: "/gallery/cup.jpg",
    title: "Autorski Kubek",
    description: "Ceramiczny kubek z ilustracją warszawskiej syrenki",
  },
  {
    id: "sticker",
    src: "/gallery/sticker-type.png",
    title: "Naklejka",
    description: "Trwała naklejka z oryginalną grafiką",
  },
  {
    id: "socks-1",
    src: "/gallery/socks-1.png",
    title: "Autorskie Skarpetki",
    description: "Wariant 1",
  },
  {
    id: "socks-2",
    src: "/gallery/socks-2.png",
    title: "Autorskie Skarpetki",
    description: "Wariant 2",
  },
  {
    id: "socks-3",
    src: "/gallery/socks-3.png",
    title: "Autorskie Skarpetki",
    description: "Wariant 3",
  },
];

export default function Home() {
  return (
    <div>
      <section className="text-center py-16 sm:py-24 px-6 max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-purple-600 uppercase block mb-3">
          Stworzono w Warszawie
        </span>
        <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-6 ${playfair.className}`}>
          Nowoczesne spojrzenie na Warszawską Syrenkę
        </h2>
        <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Dostępne do zamówienia dla Twojego sklepu
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 mb-24">
        <Gallery products={products} />
      </div>

      <section className="bg-purple-700 text-white text-center py-16 sm:py-24 px-6 rounded-t-[2.5rem] sm:rounded-t-[4rem]">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-purple-200 uppercase block mb-2">
            Butiki i Concept Store'y
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 tracking-tight ${playfair.className}`}>
            Wprowadź Syrenkę na swoje półki
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@postcardpolska.pl?subject=Zapytanie hurtowe - Warszawska Syrenka"
              className="w-full sm:w-auto inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors shadow-md text-center"
            >
              Zamów teraz!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}