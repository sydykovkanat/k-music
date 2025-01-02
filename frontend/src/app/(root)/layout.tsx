import type { Metadata } from 'next';
import '../globals.css';
import React from 'react';
import { lineyka } from '@/shared/fonts/lineyka';
import { Separator, SidebarInset, SidebarProvider, SidebarTrigger } from '@/shared/components/ui';
import { AppSidebar } from '@/shared/components/shared';
import AppBreadcrumb from '@/shared/components/shared/app-breadcrumb';

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
    <html lang='en' className={'dark'}>
      <body className={`${lineyka.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className='flex h-16 shrink-0 items-center gap-2'>
              <div className='flex items-center gap-2 px-4'>
                <SidebarTrigger className='-ml-1' />
                <Separator orientation='vertical' className='mr-2 h-4' />
                <AppBreadcrumb />
              </div>
            </header>
            <main className={'p-4 pt-0'}>{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
