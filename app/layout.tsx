import type { Metadata } from "next";
import "./globals.css";

const description = "Maitland’s next-generation botanical social bar—bold zero-proof drinks, better energy, and real connection from morning to midnight.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elevatesociallounge.com"),
  title: "Elevate Social Lounge | More Than a Bar",
  description,
  openGraph: {
    title: "Elevate Social Lounge",
    description: "A better way to go out.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Elevate Social Lounge in Maitland, Florida" }],
  },
  twitter: { card: "summary_large_image", title: "Elevate Social Lounge", description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
