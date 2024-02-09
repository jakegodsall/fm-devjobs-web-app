import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: ["400", "700"] });

import Header from "./components/Header/Header";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

export const metadata = {
  title: "Devjobs Web App (Frontend Mentor)",
  description: "Solution to the Devjobs Web App challenge by Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
        <ThemeProvider>
          <Header />
          {children}
          <div id="modal-root"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
