import { hash } from 'bcryptjs' 
import { UsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
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
  }: RegisterUseCaseRequest) {
    const userWithEmail = await this.userRepository.findByEmail(email)
  
    if (userWithEmail) {
      throw new UserAlreadyExistsError()
    }
  
    const password_hash = await hash(password, 6)

    await this.userRepository.create({
      name,
      email,
      password_hash
    })
  }
}
