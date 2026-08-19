import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joshua Hotama - Portfolio",
  description: "Portfolio of Joshua Hotama, Full Stack Developer.",
  icons: {
    icon: "/assets/img/logoHtml.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"/>
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50 text-[#0d1b2a] antialiased flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
