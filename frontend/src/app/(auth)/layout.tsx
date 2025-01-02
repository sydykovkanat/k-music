import type { Metadata } from 'next';
import '../globals.css';
import React from 'react';
import { nunito } from '@/shared/fonts/nunito';

export const metadata: Metadata = {
  title: 'K-MusicTypes | Авторизация',
  description: 'Войдите в свой аккаунт',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={'dark'}>
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
