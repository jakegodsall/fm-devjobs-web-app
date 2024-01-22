import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Devjobs Web App (Frontend Mentor)",
  description: "Solution to the Devjobs Web App challenge by Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>{children}</body>
    </html>
  );
}
