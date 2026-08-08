import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Ethan Kim Portfolio",
  description: "Created by Ethan Kim",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
