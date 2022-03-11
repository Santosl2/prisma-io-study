import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // j
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Java (Hello World)",
      duration: 320,
      description: "Curso de prisma delicinha",
      fk_id_teacher: "ebbd9f53-c43b-46ee-9e9a-6704889199d5",
    },
  });

  console.log(result);
}

main();
