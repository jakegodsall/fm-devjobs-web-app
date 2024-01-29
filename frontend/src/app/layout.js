import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

import Header from "./components/Header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

export const metadata = {
  title: "Devjobs Web App (Frontend Mentor)",
  description: "Solution to the Devjobs Web App challenge by Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
        <DarkModeProvider>
          <Header />
          {children}
          <div id="modal-root"></div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
