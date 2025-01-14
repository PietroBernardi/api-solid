import { UsersRepository } from "@/repositories/users-repository";
import { UserModel } from "@/repositories/models";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetUserProfileUseCaseRequest {
  userId: string
}

interface GetUserProfileUseCaseResponse {
  user: UserModel
}


export class GetUserProfileUseCase {
  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async execute({ 
    userId
  }: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user,
    }
  }
}