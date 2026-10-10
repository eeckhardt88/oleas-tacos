import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olea's Tacos | Taquería & Catering Sonorense • Tucson, AZ",
  description: "Authentic Sonoran charcoal-grilled tacos, caramelo, quesabirrias, and event catering in Tucson, AZ. Call ahead or book party taquizas.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-stone-950 text-stone-100">{children}</body>
    </html>
  );
}