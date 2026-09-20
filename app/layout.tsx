import type { Metadata } from "next";
import "./globals.css";

const description = "Meet friends, discover crafted zero-proof drinks, play pool, and catch local events at Elevate Social Lounge in Maitland and Estero.";

export const metadata: Metadata = {
  metadataBase: new URL("https://elevate.gdpbros.com"),
  robots: { index: false, follow: false },
  title: "Elevate Social Lounge | Zero-Proof Drinks, Full Bar Energy",
  description,
  openGraph: {
    title: "Elevate Social Lounge | Zero-Proof Drinks, Full Bar Energy",
    description: "Explore the Elevate website concept. Find location links, drink guidance, and local updates.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Elevate Social Lounge website concept" }],
  },
  twitter: { card: "summary_large_image", title: "Elevate Social Lounge", description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
