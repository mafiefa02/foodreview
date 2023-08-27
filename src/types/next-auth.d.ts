import { DefaultSession, DefaultUser } from 'next-auth';

import { ROLE } from '@prisma/client';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      role: ROLE;
    };
  }

  interface User extends DefaultUser {
    id: string;
    name: string;
    role: ROLE;
  }
}
