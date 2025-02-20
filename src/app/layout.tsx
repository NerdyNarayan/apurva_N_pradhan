// eslint-disable-next-line boundaries/no-unknown
import "@/styles/globals.css";
import { Inter, Poppins, Roboto, Montserrat, Changa } from "next/font/google";
import { AppProvider } from "../lib/provider";
const manrope = Montserrat({ subsets: ["latin"], weight: "400" });
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
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
