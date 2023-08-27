import { DefaultSession, DefaultUser } from 'next-auth';

import { ROLE } from '@prisma/client';

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string;
    name: string;
    image: string;
    role: ROLE;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}
