import { Metadata } from "next";
import "./globals.css";

import { Playfair_Display } from "next/font/google";
import { GradientBackground } from "./GradientBackground";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Postcard Polska | Buy the most beautiful Warsaw postcard",
  description:
    "Buy the most beautiful Warsaw postcard featuring the iconic Warsaw Mermaid. Printed on premium matte stock with love from Poland.",
  openGraph: {
    title: "Warszawska Syrenka Postcard",
    description: "Sealed with love 💌",
    images: [
      {
        url: "https://postcardpolska.pl/warszawska_syrenka_postcard_front.JPG",
        width: 500,
        height: 698,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://postcardpolska.pl/warszawska_syrenka_postcard_front.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <header className="text-center border-b-1 border-gray-500/20 py-8">
          <h1
            className={`text-3xl sm:text-4xl font-bold tracking-tight text-purple-500 drop-shadow-sm ${playfair.className}`}
          >
            Postcard Polska
          </h1>
          <span className="text-base sm:text-lg mt-3 text-gray-300 italic">
            Sealed with love 💌
          </span>
        </header>

        <GradientBackground>{children}</GradientBackground>

        <footer className="text-center text-sm text-gray-300 py-6 mt-12 border-t border-gray-500/20">
          &copy; {new Date().getFullYear()} ·{" "}
          <a
            href="mailto:info@postcardpolska.pl"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            info@postcardpolska.pl
          </a>
        </footer>
      </body>
    </html>
  );
}
