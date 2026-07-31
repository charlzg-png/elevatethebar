import type { Metadata } from "next";
import "./globals.css";

const description = "A modern kava and botanical tea lounge in Maitland, Florida. Come for the drinks. Stay for the connection.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elevatesociallounge.com"),
  title: "Elevate Social Lounge | Drink Different",
  description,
  openGraph: {
    title: "Elevate Social Lounge",
    description: "Drink different. Connect deeper.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Elevate Social Lounge in Maitland, Florida" }],
  },
  twitter: { card: "summary_large_image", title: "Elevate Social Lounge", description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
