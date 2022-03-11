import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Cria com um usuario ja existente
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native (Hello World)",
      duration: 320,
      description: "Curso de prisma delicinha",

      teacher: {
        connect: {
          id: "255d254b-cade-4fc9-baf3-355a8a069111",
        },
      },
    },
  });

  console.log(result);
}

main();
