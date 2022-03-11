import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const COURSE_TO_UPDATE = "184491dc-6fbd-45d0-9925-4a36c45544af";

async function main() {
  await prisma.courses.update({
    where: { id: COURSE_TO_UPDATE },
    data: {
      duration: 25,
    },
  });
}

main();
