import type { Metadata } from "next";
import "./globals.css";

const description = "Elevate is Maitland and Estero’s all-day botanical social lounge—crafted zero-proof drinks, weekly rituals, and a better way to go out.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elevatesociallounge.com"),
  title: "Elevate Social Lounge | More Than a Bar",
  description,
  openGraph: {
    title: "Elevate Social Lounge | More Than a Bar",
    description: "Two neighborhoods. One unmistakable experience. A better way to go out.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Elevate Social Lounge — More Than a Bar — Maitland and Estero" }],
  },
  twitter: { card: "summary_large_image", title: "Elevate Social Lounge", description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
