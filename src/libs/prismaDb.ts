import { PrismaClient } from "@prisma/client";

const env = process.env.NODE_ENV
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma: PrismaClient =
    globalForPrisma.prisma ??
    new PrismaClient({
        log:
            env === 'development' ? ['error', 'warn'] : ['error'],
            // env === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });

if (env !== 'production') {
    globalForPrisma.prisma = prisma;
}