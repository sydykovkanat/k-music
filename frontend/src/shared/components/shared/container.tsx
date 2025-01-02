import { cn } from '@/shared/lib/utils';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

export function Container({ className, children }: Props) {
  return <div className={cn('max-w-screen-xl mx-auto px-4', className)}>{children}</div>;
}
