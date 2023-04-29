import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const deviceRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.device.findMany();
  }),
  create: publicProcedure
    .input(z.object({ serial: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.device.create({ data: input });
    }),
});
