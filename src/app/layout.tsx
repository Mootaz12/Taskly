import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "./../components/Header";
import Footer from "@/components/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskly",
  description:
    "Taskly - Your ultimate task manager to organize, prioritize, and achieve your goals effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  min-h-screen `}>
        <AntdRegistry>
          <Header />
          <main
            className="
          flex flex-col justify-center items-center"
          >
            {children}
          </main>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
