import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const userAdmin = this.turnUserAdminUseCase.execute({ user_id });
      return response.json({
        id: userAdmin.id,
        email: userAdmin.email,
        name: userAdmin.name,
        admin: userAdmin.admin,
        created_at: userAdmin.created_at,
        updated_at: userAdmin.updated_at,
      });
    } catch (error) {
      return response.status(404).json({
        error: error.message,
      });
    }
  }
}

export { TurnUserAdminController };
