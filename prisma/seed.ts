import { PrismaClient } from '@prisma/client';
import { teamMembers } from '../data/teamMembers';

const prisma = new PrismaClient();

async function main() {


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
