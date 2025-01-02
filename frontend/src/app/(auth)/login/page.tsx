import { LoginForm, Logo } from '@/shared/components/shared';

export default function Page() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <a href='#' className='flex items-center gap-2 self-center font-medium'>
          <Logo />
          K-Music
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
