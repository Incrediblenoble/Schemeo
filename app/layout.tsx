import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Schemeo",
  description: "Showcase and discover remarable developer projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        Navbar
        <main>{children}</main>
        Footer
      </body>
    </html>
  );
}
