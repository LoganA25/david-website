import type { Metadata } from "next";
import { Inter, Pixelify_Sans} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cytech",
  description: "David's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#22333b] h-screen">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


