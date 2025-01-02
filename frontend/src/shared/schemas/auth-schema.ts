import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string({ message: 'Поле "email" обязательна ' }).email({ message: 'Некорректный формат почты' }),
  password: z.string().min(6, {
    message: 'Минимальная длина пароля 6 символов',
  }),
});
