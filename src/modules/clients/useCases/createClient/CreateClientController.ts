/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { Request, Response } from "express";

import CreateClientUseCase from "./CreateClientUseCase";

export default class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const createClientUseCase = new CreateClientUseCase();

    const result = await createClientUseCase.execute({
      username,
      password,
    });
    return response.json(result);
  }
}
