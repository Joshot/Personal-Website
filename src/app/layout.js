import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joshua Hotama - Personal Portfolio",
  description: "Portfolio website of Joshua Hotama, Full Stack Developer, showcasing skills, interactive project showcases, and career journey.",
  icons: {
    icon: "/assets/img/logoHtml.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gray-50 text-[#0d1b2a] antialiased flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
