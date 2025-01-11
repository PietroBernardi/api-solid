import { UserModel } from "./models";

export interface UsersRepository {
  findById(id: string): Promise<UserModel | null>
  findByEmail(email: string): Promise<UserModel | null>
  create(data: UserModel) : Promise<UserModel>
}