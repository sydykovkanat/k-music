import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@/users/dtos/create-user.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { GetUserDto } from '@/users/dtos/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create({ email, password, displayName }: CreateUserDto) {
    const user = this.getUser({ email });

    if (user) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    return this.prismaService.user.create({
      data: {
        email,
        password,
        displayName,
      },
    });
  }

  async getUser({ id, email }: GetUserDto) {
    if (!id && !email) {
      throw new BadRequestException('Необходимо указать id или email');
    }

    return this.prismaService.user.findFirst({
      where: {
        id: id ?? undefined,
        email: email ?? undefined,
      },
    });
  }

  async getAllUsers() {
    return this.prismaService.user.findMany();
  }
}
