import { PrismaUserRepository } from "./prisma/prisma-users-repository";

const prismaUserRepository = new PrismaUserRepository()

export const userRespository = prismaUserRepository 