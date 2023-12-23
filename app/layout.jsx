import { Inter } from "next/font/google";
import {
  GrBarChart,
  GrBladesVertical,
  GrSchedulePlay,
  GrTrophy,
} from "react-icons/gr";

import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beerpong Turnier",
  description: "Beerpong Turnier App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-background text-text`}>
        <main className="h-[100dvh] w-screen">
          {children}
          <div className="h-24" />
        </main>
        <div className="fixed bottom-8 inset-x-8 bg-white  flex justify-around rounded-full items-center h-16 drop-shadow-2xl">
          <Link href="/">
            <GrBladesVertical size={32} color="#B03B54" />
          </Link>
          <Link href="/finals">
            <GrTrophy size={32} color="#B03B54" />
          </Link>
          <Link href="/stats">
            <GrBarChart size={32} color="#B03B54" />
          </Link>
        </div>
      </body>
    </html>
  );
}
