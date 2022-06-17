import prisma from '../lib/prisma'
export const resolvers = {
    Query: {
        teamMembers: async (_parent, _args, context) => await context.prisma.teamMember.findMany
    }
}