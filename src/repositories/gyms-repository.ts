import { GymModel } from "./models";

export interface GymsRepository {
  findById(id: string): Promise<GymModel | null>
}