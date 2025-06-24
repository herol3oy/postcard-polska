import { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
