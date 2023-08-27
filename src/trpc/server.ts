import { prisma } from '~/prisma';
import { appRouter } from '~/server/api';

import { ROLE } from '@prisma/client';

if (!process.env.ADMINISTRATOR_USERID)
  throw new Error('ADMINISTRATOR_USERID is not set');

export const trpcServer = appRouter.createCaller({
  session: {
    user: {
      id: process.env.ADMINISTRATOR_USERID,
      name: 'Administrator',
      role: ROLE.ADMIN,
    },
    expires: '2100-10-01T00:00:00.000Z',
  },
  prisma,
});
