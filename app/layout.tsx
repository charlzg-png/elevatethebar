import type { Metadata } from "next";
import "./globals.css";

const description = "Meet friends, discover crafted zero-proof drinks, play pool, and catch local events at Elevate Social Lounge in Maitland and Estero.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elevatesociallounge.com"),
  title: "Elevate Social Lounge | Zero-Proof Drinks, Full Bar Energy",
  description,
  openGraph: {
    title: "Elevate Social Lounge | Zero-Proof Drinks, Full Bar Energy",
    description: "Good people, late hours, crafted drinks, and something happening in the room.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Elevate Social Lounge in Maitland and Estero" }],
  },
  twitter: { card: "summary_large_image", title: "Elevate Social Lounge", description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
