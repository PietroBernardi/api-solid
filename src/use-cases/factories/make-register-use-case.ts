import { userRespository } from "@/repositories/repositories"
import { RegisterUseCase } from "../register"

export function makeRegisterUseCase() {
  const usersRepository = userRespository
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}