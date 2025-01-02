import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className={'bg-s-background'}>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>
            С возвращением <span className='text-primary'>👋</span>
          </CardTitle>
          <CardDescription>Войдите в свой аккаунт, чтобы продолжить</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid gap-6'>
              <div className='grid gap-6'>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Почта</Label>
                  <Input id='email' type='email' placeholder='m@example.com' required />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='password'>Пароль</Label>
                  <Input id='password' type='password' required />
                </div>
                <Button type='submit' className='w-full'>
                  Войти
                </Button>
              </div>
              <div className='text-center text-sm'>
                Нет аккаунта?{' '}
                <a href='#' className='underline underline-offset-4'>
                  Зарегистрироваться
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className='text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  '>
        Нажимая на кнопку, вы соглашаетесь с нашими <br /> <a href='#'>Условиями использования</a> и{' '}
        <a href='#'>Политикой конфиденциальности</a>
      </div>
    </div>
  );
}
