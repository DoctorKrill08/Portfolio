import type { Metadata } from "next";
import "./globals.css";
import Sidebar from './sidebar/sidebar';


export const metadata: Metadata = {
  title: "Ethan Kim Portfolio",
  description: "Created by Ethan Kim",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='home'>
          <Sidebar/>
          <main> {children} </main>
        </div>
      </body>
    </html>
  )
}
