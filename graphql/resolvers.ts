import prisma from '../lib/prisma'


export const resolvers = {
    Query: {
        teamMembers: async () => await prisma.teamMember.findMany()
    }
}