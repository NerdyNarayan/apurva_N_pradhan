// eslint-disable-next-line boundaries/no-unknown
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "../lib/provider";
const inter = Inter({ subsets: ["latin"] });
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </AppProvider>
      </body>
    </html>
  );
};
export default RootLayout;
