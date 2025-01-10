import { UsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import bcryptjs from 'bcryptjs'
import { UserModel } from '@/repositories/models'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

interface RegisterUseCaseResponse {
  user: UserModel
}

// SOLID - Dependency Inversion Principle
/**
 * This class has no direct dependencies on specific repositories, 
 * allowing it to work with Prisma or any other database connection 
 * seamlessly. 
 * This design facilitates easy swapping of the database connection 
 * if necessary, adhering to the Dependency Inversion Principle.
 */

export class RegisterUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    name, 
    email, 
    password
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const userWithEmail = await this.userRepository.findByEmail(email)
  
    if (userWithEmail) {
      throw new UserAlreadyExistsError()
    }
  
    const password_hash = await bcryptjs.hash(password, 6)

    const user = await this.userRepository.create({
      name,
      email,
      password_hash
    })

    return {
      user,
    }
  }
}
