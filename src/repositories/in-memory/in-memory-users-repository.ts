import { UsersRepository } from "../users-repository";
import { UserModel } from "../models";

export class InMemoryUsersRepository implements UsersRepository {
  public items: UserModel[] = []


  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
  async create(data: UserModel) {
    const user =  {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }

    this.items.push(user)
    return user
  }
}