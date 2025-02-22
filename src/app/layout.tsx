/* eslint-disable boundaries/element-types */
// eslint-disable-next-line boundaries/no-unknown
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "../lib/provider";
import Header from "@/components/header/header";
import { type Metadata } from "next";
import Footer from "@/components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://apurva-n-pradhan.vercel.app";
export const metaData: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Apurva Pradhan",
    template: "%s | Apurva Pradhan",
  },
  description: "Apurva Pradhan's Portfolio",
  keywords: "portfolio, personal, portfolio, website, nextjs, tailwindcss",
  authors: [
    {
      name: "Apurva Pradhan",
      url: "https://apurva-n-pradhan.vercel.app",
    },
  ],
  creator: "Apurva Pradhan",
  openGraph: {
    title: "Apurva Pradhan",
    description: "Apurva Pradhan's Portfolio",
    url: baseUrl,
    siteName: "Apurva Pradhan",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className}`}>
      <body className="tracking-light antialiased">
        <AppProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto min-h-screen w-full max-w-[80ch] space-y-6 px-4 md:px-0">
            <Header />
            {children}
            <Footer />
          </main>
        </AppProvider>
      </body>
    </html>
  );
};
export default RootLayout;
