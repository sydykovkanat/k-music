'use client';

import * as React from 'react';
import { Frame, LifeBuoy, Map, PieChart, Send } from 'lucide-react';

import { NavMain } from '@/shared/components/shared/nav-main';
import { NavProjects } from '@/shared/components/shared/nav-projects';
import { NavUser } from '@/shared/components/shared/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { CollectionIcon, MusicIcon, SearchAreaIcon } from '@/shared/icons';

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
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='/' className={'py-7 px-[0.4rem]'}>
                <div className='flex aspect-square size-11 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <Image src={'/logo.svg'} alt={'K-Music'} width={38} height={38} />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>K-Music</span>
                  <span className='truncate text-xs'>Музыкальный сервис</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
