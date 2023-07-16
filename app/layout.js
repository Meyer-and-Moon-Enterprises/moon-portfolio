import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { IBMPlexSans } from "./fonts";
import { PHProvider } from "./providers";

export const metadata = {
  title: "Genuine Jesse",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='night' className={`${IBMPlexSans.variable}`}>
      <PHProvider>
        <body className='bg-black text-white'>
          <Navbar />
          {children}
          <Footer />
        </body>
      </PHProvider>
    </html>
  );
}
