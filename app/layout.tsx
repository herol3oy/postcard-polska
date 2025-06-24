import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Postcard Polska | Buy the most beautiful Warsaw postcard',
  description: 'Buy the most beautiful Warsaw postcard featuring the iconic Warsaw Mermaid. Printed on premium matte stock with love from Poland.',
}

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
