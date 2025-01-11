import { userRespository } from "@/repositories/repositories"
import { AuthenticateUseCase } from "../authenticate"

export function makeAuthenticateUseCase() {
  const usersRepository = userRespository
  const authenticateUseCase = new AuthenticateUseCase(usersRepository)

  return authenticateUseCase
}