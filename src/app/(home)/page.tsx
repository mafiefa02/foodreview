'use client';

import { useSession } from 'next-auth/react';
import { trpc } from '~/trpc/client';

export default function Home() {
  const session = useSession();
  const user = session.data?.user;
  const hello = trpc.exampleRouter.example.useQuery();

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      Home
    </main>
  );
}
