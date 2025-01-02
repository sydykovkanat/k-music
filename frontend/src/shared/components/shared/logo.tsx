import Image from 'next/image';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, size = 'md' }: Props) {
  const sizeMap = {
    sm: 28,
    md: 38,
    lg: 48,
  };

  return (
    <div
      className={cn(
        'flex aspect-square size-11 items-center justify-center rounded-lg text-sidebar-primary-foreground',
        className,
      )}
    >
      <Image src={'/logo.svg'} alt={'K-MusicTypes'} width={sizeMap[size]} height={sizeMap[size]} />
    </div>
  );
}
