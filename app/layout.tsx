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
        <header className="border-b border-stone-200 px-6">
          <nav className="py-3 justify-center flex">
            <h1
              className={`text-2xl font-bold tracking-tight text-purple-700 mx-auto {playfair.className}`}
            >
              Warszawska Syrenka
            </h1>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="text-center text-sm text-stone-400 py-8 mt-16 border-t border-stone-200 px-6">
          &copy; {new Date().getFullYear()} Warszawska Syrenka ·{" "}
          <a
            href="mailto:info@postcardpolska.pl"
            className="text-purple-600 hover:text-purple-500 underline"
          >
            info@postcardpolska.pl
          </a>
        </footer>
      </body>
    </html>
  );
}
