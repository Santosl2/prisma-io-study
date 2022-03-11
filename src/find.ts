import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const result = await prisma.courses.findMany({ Find all
  //   const result = await prisma.courses.findFirst({ Find first

  // Find Last
  const result = await prisma.courses.findMany({
    take: -1,
  });
  console.log(result);
}

main();
