'use client';

import { cn } from '@/shared/lib/utils';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/components/ui';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/shared/schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='grid gap-6'>
                <div className='grid gap-6'>
                  <FormField
                    control={form.control}
                    name={'email'}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Почта</FormLabel>
                        <FormControl>
                          <Input placeholder={'Введите почту'} {...field} />
                        </FormControl>

                        {form.formState.errors.email && (
                          <FormMessage>{form.formState.errors.email.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={'password'}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Пароль</FormLabel>
                        <FormControl>
                          <Input placeholder={'Введите пароль'} type={'password'} {...field} />
                        </FormControl>

                        {form.formState.errors.password && (
                          <FormMessage>{form.formState.errors.password.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <Button type='submit' className='w-full'>
                    Войти
                  </Button>
                </div>
                <div className='text-center text-sm'>
                  Нет аккаунта?&nbsp;
                  <a href='#' className='underline underline-offset-4'>
                    Зарегистрироваться
                  </a>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className='text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary'>
        Нажимая на кнопку, вы соглашаетесь с нашими <br /> <a href='#'>Условиями использования</a> и{' '}
        <a href='#'>Политикой конфиденциальности</a>
      </div>
    </div>
  );
}
