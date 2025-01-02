'use client';

import * as React from 'react';
import { Frame, LifeBuoy, Map, PieChart, Send } from 'lucide-react';

import { NavMain } from '@/shared/components/shared/nav-main';
import { NavUser } from '@/shared/components/shared/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/shared/components/ui/sidebar';
import { CollectionIcon, MusicIcon, SearchAreaIcon } from '@/shared/icons';
import { Logo } from '@/shared/components/shared/logo';

const data = {
  user: {
    name: 'Сыдыков Канат',
    email: 'kanat@gmail.com',
    avatar: 'https://i.pinimg.com/736x/db/1c/20/db1c20e6968cc04e54c167f6c67cacea.jpg',
  },
  navMain: [
    {
      title: 'Поиск',
      url: '/search',
      icon: SearchAreaIcon,
    },
    {
      title: 'Главная',
      url: '/',
      icon: MusicIcon,
      isActive: true,
    },
    {
      title: 'Коллекции',
      url: '/collections',
      icon: CollectionIcon,
    },
  ],
  navSecondary: [
    {
      title: 'Поддержка',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Отзыв',
      url: '#',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant='inset' {...props}>
      <SidebarHeader>
        <div className='flex items-center gap-1 text-2xl font-semibold'>
          <Logo />
          K-Music
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
