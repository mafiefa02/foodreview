'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Skeleton } from '~/components/ui/skeleton';

export default function UserAction() {
  const { status, data: session } = useSession();

  switch (status) {
    case 'authenticated':
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className='ml-2 rounded-full'>
            <Avatar className='h-9 w-9'>
              <AvatarImage src={session.user.image ?? undefined} />
              <AvatarFallback>
                {session.user.name.split(' ')[0][0]}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <p className='max-w-[18ch] overflow-hidden text-ellipsis whitespace-nowrap font-normal'>
                Logged in as{' '}
                <span className='block text-sm font-bold'>
                  {session.user.name}
                </span>
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Button
                  className='w-full focus:border-none focus:bg-destructive/90 focus:text-destructive-foreground/90'
                  variant='destructive'
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );

    case 'unauthenticated':
      return (
        <Button
          onClick={() => signIn()}
          variant='outline'
          className='ml-2 border-2'
        >
          Sign In
        </Button>
      );

    default:
      return <Skeleton className='ml-2 h-9 w-9 rounded-full' />;
  }
}
