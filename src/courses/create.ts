import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // se nao tiver ele cria
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixir (Hello World)",
      duration: 300,
      description: "Curso de prisma delicinha",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Matheus Filype",
          },
          create: {
            name: "Matheus Filype",
          },
        },
      },
    },
  });

  console.log(result);
}

main();
