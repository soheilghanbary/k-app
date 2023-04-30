import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const deviceRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.device.findMany();
  }),
  get: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    if (!input.length && input === undefined) return;
    return ctx.prisma.device.findFirst({ where: { serial: input } });
  }),
  setSerial: publicProcedure
    .input(z.object({ id: z.string(), serial: z.string() }))
    .mutation(({ ctx, input }) => {
      const { id, serial } = input;
      return ctx.prisma.device.update({
        where: { id },
        data: { serial },
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        type: z.string(),
        serial: z.string(),
        name: z.string(),
        date: z.string(),
        phone: z.string(),
        expert: z.string(),
        seller: z.string(),
        address: z.string(),
        packages: z.any().array(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.device.update({ where: { id: input.id }, data: { ...input } });
    }),
  create: publicProcedure
    .input(z.object({ serial: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.device.create({ data: input });
    }),
});
