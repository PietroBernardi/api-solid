import { CheckInModel } from "./models";

export interface CheckInsRepository {
  create(data: CheckInModel) : Promise<CheckInModel>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckInModel | null>
}