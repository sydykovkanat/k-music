import type { Metadata } from 'next';
import '../globals.css';
import React from 'react';
import { lineyka } from '@/shared/fonts/lineyka';

export const metadata: Metadata = {
  title: 'K-Music | Авторизация',
  description: 'Войдите в свой аккаунт',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={'dark'}>
      <body className={`${lineyka.className} antialiased`}>{children}</body>
    </html>
  );
}
