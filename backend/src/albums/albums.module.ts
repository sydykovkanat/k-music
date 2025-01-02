import { BadRequestException, Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { ArtistsService } from '@/artists/artists.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (_req, _file, cb) => {
          const uploadDir = join(process.cwd(), 'uploads/albums');

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
  controllers: [AlbumsController],
  providers: [AlbumsService, PrismaService, ArtistsService],
})
export class AlbumsModule {}
