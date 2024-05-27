import { Inter } from "next/font/google";

import '../public/css/HomePage.css'
import '../public/css/globals.css'

import '/public/css/style.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zona Colorado",
  description: "Equipo Creativo Distrital",

};

// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <link rel="icon" href="/images/1.png" />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}