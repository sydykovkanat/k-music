import { BadRequestException, Module } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { MusicsController } from './musics.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { AlbumsService } from '@/albums/albums.service';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (_req, _file, cb) => {
          const uploadDir = join(process.cwd(), 'uploads/musics');

          if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir);
          }

          return cb(null, uploadDir);
        },
        filename: (_req, file, cb) => {
          const ext = extname(file.originalname);
          const originalName = file.originalname.replace(ext, '');
          const filename = `${originalName}-${Date.now()}${ext}`;
          return cb(null, filename);
        },
      }),
      fileFilter: (_req, file, cb) => {
        const fileMime = file.mimetype.split('/');

        if (fileMime.includes('image')) {
          return cb(null, true);
        } else {
          return cb(new BadRequestException(`Тип ${fileMime[1]} не поддерживается`), false);
        }
      },
    }),
  ],
  controllers: [MusicsController],
  providers: [MusicsService, PrismaService, AlbumsService],
})
export class MusicsModule {}
