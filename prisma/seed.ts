import { PrismaClient } from '@prisma/client';
import { teamMembers } from '../data/teamMembers';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'test1@gmail.com',
      role: 'ADMIN',
    },
  });

  await prisma.teamMember.createMany({
    data: teamMembers,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
