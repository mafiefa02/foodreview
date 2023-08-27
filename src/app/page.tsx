'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '~/components/ui/button';

import { trpc } from './_trpc/client';

export default function Home() {
  const session = useSession();
  const user = session.data?.user;
  const hello = trpc.exampleRouter.example.useQuery();

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      {session.status === 'authenticated' ? (
        <div className='flex flex-col'>
          {user?.name} {hello.data}
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
    </main>
  );
}
