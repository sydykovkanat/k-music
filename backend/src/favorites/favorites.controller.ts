import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { FavoritesService } from '@/favorites/favorites.service';
import { CurrentUser } from '@/utils/decorators/current-user.decorator';
import { JwtAccessGuard } from '@/auth/guards/jwt-access.guard';

@UseGuards(JwtAccessGuard)
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  async getFavorites(@CurrentUser('id') userId: string) {
    return this.favoritesService.getFavorites(userId);
  }

  @Post(':musicId')
  async toggleFavorite(@CurrentUser('id') userId: string, @Param('musicId') musicId: string) {
    return this.favoritesService.toggleFavorite(userId, musicId);
  }
}
