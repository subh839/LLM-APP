console.log("Hello via Bun!");
//
const { PrismaClient } = require('@prisma/client');
export const prismaClient  = new PrismaClient();

