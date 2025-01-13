import { Prisma } from '@prisma/client'

export type UserModel = Prisma.UserCreateInput
export type CheckInModel = Prisma.CheckInUncheckedCreateInput
export type GymModel = Prisma.GymCreateInput