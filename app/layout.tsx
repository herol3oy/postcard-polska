import "./globals.css";

import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warszawska Syrenka | Illustrated products from Poland",
  description:
    "A series of illustrated products inspired by the stories of Poland. Postcards, apparel, and accessories featuring original artwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased">
        <header className="border-b border-stone-200 py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1
              className={`text-3xl sm:text-5xl font-bold tracking-tight text-purple-700 ${playfair.className}`}
            >
              Warszawska Syrenka
            </h1>
            <p className="text-base sm:text-lg mt-2 text-stone-400 italic">
              Sealed with love
            </p>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="text-center text-sm text-stone-400 py-8 mt-16 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6">
            &copy; {new Date().getFullYear()} Warszawska Syrenka ·{" "}
            <a
              href="mailto:info@postcardpolska.pl"
              className="text-purple-600 hover:text-purple-500 underline"
            >
              info@postcardpolska.pl
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
