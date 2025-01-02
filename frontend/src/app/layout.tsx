import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { lineyka } from '@/shared/fonts/lineyka';

export const metadata: Metadata = {
  title: 'K-Music',
  description: 'Все ваши любимые песни в одном месте',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${lineyka.className} antialiased my-2`}>{children}</body>
    </html>
  );
}
