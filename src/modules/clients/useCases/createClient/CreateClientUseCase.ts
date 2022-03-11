/* eslint-disable class-methods-use-this */
import { hash } from "bcrypt";

import prisma from "../../../../database/primaClient";

interface CreateClient {
  username: string;
  password: string;
}

export default class CreateClientUseCase {
  async execute({ password, username }: CreateClient) {
    // Validate user exists
    const client = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
          equals: username,
        },
      },
    });

    if (client) {
      throw new Error("Oops, usuário já registrado.");
    }

    // Crypt the password
    const hashPassword = await hash(password, 10);

    // Save on database
    const clientCreated = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return clientCreated;
  }
}
