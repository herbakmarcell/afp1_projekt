
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const Getorarend = async (req, res) => {
    const ora = await prisma.user.findMany()
    res.status(200).json(ora)
}
export { Getorarend }