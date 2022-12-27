import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const user = this.createUserUseCase.execute({ email, name });
      return response.status(201).json({
        id: user.id,
        email: user.email,
        name: user.name,
        admin: user.admin,
        created_at: user.created_at,
        updated_at: user.updated_at,
      });
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }
}

export { CreateUserController };
