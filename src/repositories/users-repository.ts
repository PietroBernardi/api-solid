import { UserModel } from "./models";

export interface UsersRepository {
  findByEmail(email: string): Promise<UserModel | null>
  create(data: UserModel) : Promise<UserModel>
}