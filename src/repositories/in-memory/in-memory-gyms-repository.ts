import { GymsRepository } from "../gyms-repository";
import { GymModel } from "../models";

export class InMemoryGymsRepository implements GymsRepository {
  public items: GymModel[] = []

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) {
      return null
    }

    return gym
  }
}