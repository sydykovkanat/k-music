'use client';

import * as React from 'react';
import { BookOpen, Bot, Command, Frame, LifeBuoy, Map, PieChart, Send, SquareTerminal } from 'lucide-react';

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

const data = {
  user: {
    name: 'Сыдыков Канат',
    email: 'kanat@gmail.com',
    avatar: 'https://i.pinimg.com/736x/db/1c/20/db1c20e6968cc04e54c167f6c67cacea.jpg',
  },
  navMain: [
    {
      title: 'Главная',
      url: '/',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'Музыка',
      url: '/musics',
      icon: Bot,
    },
    {
      title: 'Коллекции',
      url: '/collections',
      icon: BookOpen,
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
              <a href='#'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <Command className='size-4' />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>Acme Inc</span>
                  <span className='truncate text-xs'>Enterprise</span>
                </div>
              </a>
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
