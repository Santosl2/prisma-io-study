import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ja logo cria o usuario
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React (Hello World)",
      duration: 320,
      description: "Curso de prisma delicinha",

      teacher: {
        create: {
          name: "Diego",
        },
      },
    },
  });

  console.log(result);
}

main();
