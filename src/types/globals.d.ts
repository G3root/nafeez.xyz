import { PrismaClient } from '@prisma/client';

export declare global {
  var prisma: PrismaClient | undefined;
}
