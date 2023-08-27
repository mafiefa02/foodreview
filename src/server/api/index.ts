import { exampleRouter } from './routers/example';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  exampleRouter,
});

export type AppRouter = typeof appRouter;
