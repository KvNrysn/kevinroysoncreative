import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "@/index.css";

export const metadata: Metadata = {
  title: "KevinRoysonCreative — Content Operations Partner",
  description: "Strategic content operations for founder-led YouTube creators. Editing, thumbnails, topic research, and monthly strategy — handled.",
  authors: [{ name: "KevinRoysonCreative" }],
  openGraph: {
    title: "KevinRoysonCreative — Content Operations Partner",
    description: "Strategic content operations for founder-led YouTube creators.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
