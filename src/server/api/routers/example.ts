import { createTRPCRouter, publicProcedure } from '../trpc';

export const exampleRouter = createTRPCRouter({
  example: publicProcedure.query(async () => 'Hello World!'),
});
