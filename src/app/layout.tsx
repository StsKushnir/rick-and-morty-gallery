import type { Metadata } from "next";
import { Roboto } from 'next/font/google';

import "./globals.css";
import { ReduxProvider } from "@/store/provider";

// Імпорт шрифту Roboto з підмножиною 'latin' і двома варіантами ваги
const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});

export const metadata: Metadata = {
  title: "Rick and Morty gallery",
  description: "This is your gallery with the dossier of characters",
  icons: {
    icon: "/icons/jerry-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

