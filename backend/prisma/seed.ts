import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function up() {
  await prisma.user.createMany({
    data: [
      {
        email: 'kanat@gmail.com',
        password: '123qwe',
        displayName: 'Sydykov Kanat',
      },
      {
        email: 'argen@gmail.com',
        password: '123qwe',
        displayName: 'Ashimov Argen',
      },
    ],
  });

  const bakr = await prisma.artist.create({
    data: {
      name: 'Bakr',
      avatar: 'uploads/seed/artists/bakr.png',
    },
  });

  const fourNWay = await prisma.artist.create({
    data: {
      name: '4n Way',
      avatar: 'uploads/seed/artists/4n-way.jpg',
    },
  });

  const yanix = await prisma.artist.create({
    data: {
      name: 'Yanix',
      avatar: 'uploads/seed/artists/yanix.jpeg',
    },
  });

  const obladaet = await prisma.artist.create({
    data: {
      name: 'Obladaet',
      avatar: 'uploads/seed/artists/obladaet.jpg',
    },
  });

  const ulukmanapo = await prisma.artist.create({
    data: {
      name: 'Ulukmanapo',
      avatar: 'uploads/seed/artists/manapo.jpg',
    },
  });

  const hiro = await prisma.artist.create({
    data: {
      name: 'Hiro',
      avatar: 'uploads/seed/artists/hiro.jpeg',
    },
  });

  const goneFludd = await prisma.artist.create({
    data: {
      name: 'Gone.Fludd',
      avatar: 'uploads/seed/artists/flud.webp',
    },
  });

  const fourNWayAlbum = await prisma.album.create({
    data: {
      title: 'FRIENDS-',
      cover: 'uploads/seed/friends.jpg',
      year: 2023,
      artistId: fourNWay.id,
    },
  });

  const yanixAlbum = await prisma.album.create({
    data: {
      title: 'YANIX',
      cover: 'uploads/seed/bla-bla-land.jpg',
      year: 2017,
      artistId: yanix.id,
    },
  });

  const ulukmanapoAlbum = await prisma.album.create({
    data: {
      title: 'Код доступа 996',
      cover: 'uploads/seed/kod-dostupa-996.jpg',
      year: 2020,
      artistId: ulukmanapo.id,
    },
  });

  const obladateAlbum = await prisma.album.create({
    data: {
      title: 'PLAYERS CLUB 2',
      cover: 'uploads/seed/players-club-2.png',
      year: 2023,
      artistId: obladaet.id,
    },
  });

  const hiroAlbum = await prisma.album.create({
    data: {
      title: '1017. Часть вторая',
      cover: 'uploads/seed/hiro-1017.jpg',
      year: 2019,
      artistId: hiro.id,
    },
  });

  const goneFluddAlbum = await prisma.album.create({
    data: {
      title: 'СУПЕРЧУИТС',
      cover: 'uploads/seed/superchuits.jpg',
      year: 2018,
      artistId: goneFludd.id,
    },
  });

  const obladaetYaBuduRemix = await prisma.album.create({
    data: {
      title: 'Я БУДУ Remix',
      cover: 'uploads/seed/budu-remix.jpg',
      year: 2023,
      artistId: obladaet.id,
    },
  });

  const fourNWaySos = await prisma.music.create({
    data: {
      duration: '01:42',
      title: 'SOS',
      year: 2023,
      cover: 'uploads/seed/sos-4nway.jpg',
      albumId: fourNWayAlbum.id,
      artistId: fourNWay.id,
    },
  });

  const hochuKTebe = await prisma.music.create({
    data: {
      duration: '04:00',
      title: 'Хочу к тебе',
      year: 2023,
      cover: 'uploads/seed/bla-bla-land.jpg',
      albumId: yanixAlbum.id,
      artistId: yanix.id,
    },
  });

  const denzelW = await prisma.music.create({
    data: {
      duration: '03:25',
      title: 'Denzel W.',
      year: 2020,
      cover: 'uploads/seed/denzel-w.jpg',
      albumId: ulukmanapoAlbum.id,
      artistId: ulukmanapo.id,
    },
  });

  const proklyatie = await prisma.music.create({
    data: {
      duration: '02:30',
      title: 'Проклятие',
      year: 2023,
      cover: 'uploads/seed/proklyatie.png',
      albumId: obladateAlbum.id,
      artistId: obladaet.id,
    },
  });

  const lubi = await prisma.music.create({
    data: {
      duration: '03:07',
      title: 'Люби',
      year: 2019,
      cover: 'uploads/seed/hiro-1017.jpg',
      albumId: hiroAlbum.id,
      artistId: hiro.id,
    },
  });

  const dripset = await prisma.music.create({
    data: {
      duration: '02:48',
      title: 'ДРИПСЭТ',
      year: 2018,
      cover: 'uploads/seed/dripset.jpg',
      albumId: goneFluddAlbum.id,
      artistId: goneFludd.id,
    },
  });

  const tytyn = await prisma.music.create({
    data: {
      duration: '03:08',
      title: 'TYTYN',
      year: 2024,
      cover: 'uploads/seed/tytyn.jpg',
      artistId: bakr.id,
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "musics" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "albums" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "artists" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "_UserFavorites" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "comments" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
