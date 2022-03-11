import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixir (Hello World)",
      duration: 300,
      description: "Curso de prisma delicinha",
    },
  });

  console.log(result);
}

main();
