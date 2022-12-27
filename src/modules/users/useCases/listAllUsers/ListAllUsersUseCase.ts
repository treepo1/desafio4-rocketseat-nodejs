import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) throw new Error("Not existent user!");

    const userIsAdmin = userExists.admin;

    if (!userIsAdmin) throw new Error("Not allowed!");

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
