import { Montserrat, Libre_Baskerville } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { PreloadResources } from "./components/utils/preload-resources";
import "modern-normalize";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: "normal",
  variable: "--font-montserrat",
});
const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre_baskerville",
});

export const metadata = {
  title: "Asmax",
  description: "Asmax group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PreloadResources />
      <body className={`${montserrat.variable} ${libre.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
