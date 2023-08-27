import { getServerSession } from 'next-auth';
import { appRouter } from '~/server/api';
import { createTRPCContext } from '~/server/api/trpc';

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { authOptions } from '../../auth/auth-options';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    router: appRouter,
    req,
    createContext: async () => {
      const session = await getServerSession(authOptions);

      return createTRPCContext({
        session,
      });
    },
  });

export { handler as GET, handler as POST };
