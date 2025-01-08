import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav";
import { Suspense } from "react";

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Shoe Store",
    default: "Welcome / Shoe Store",
  },
  description: `Discover the ultimate collection of stylish and comfortable shoes for every occasion. 
  From everyday wear to luxury designs, our shoe store offers quality and elegance 
  tailored to your needs. Shop the perfect pair today!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbh.className} `}>
        <Suspense fallback="loading...">
          <Nav />
        </Suspense>
        <div className="mb-12 mt-24 px-4 md:px-8 lg:mt-28 xl:px-12">
          {children}
        </div>
      </body>
    </html>
  );
}
