import type { Metadata } from "next";
import "./globals.css";

const description = "Elevate is a functional social lounge in Maitland and Estero, with crafted zero-proof drinks, proactive hospitality, and real community.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elevatesociallounge.com"),
  title: "Elevate Social Lounge | A Better Way to Go Out",
  description,
  openGraph: {
    title: "Elevate Social Lounge | A Better Way to Go Out",
    description: "Functional drinks, real connection, and a room that meets you where you are.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Elevate Social Lounge in Maitland and Estero" }],
  },
  twitter: { card: "summary_large_image", title: "Elevate Social Lounge", description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
