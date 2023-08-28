'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button, buttonVariants } from '~/components/ui/button';
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
import { cn } from '~/lib/utils';

import { ROLE } from '@prisma/client';
import { EnterIcon } from '@radix-ui/react-icons';

export default function UserAction() {
  const { status, data: session } = useSession();

  switch (status) {
    case 'authenticated':
      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            className='ml-1 rounded-full'
            name='avatar'
          >
            <Avatar className='h-7 w-7 md:h-8 md:w-8'>
              <AvatarImage
                src={session.user.image ?? undefined}
                alt={session.user.name}
              />
              <AvatarFallback>
                {session.user.name.split(' ')[0][0]}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <p className='max-w-sm overflow-hidden text-ellipsis whitespace-nowrap font-normal'>
                Logged in as{' '}
                <span className='block text-sm font-bold'>
                  {session.user.name}
                </span>
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className='space-y-1'>
              {session.user.role === ROLE.ADMIN && (
                <DropdownMenuItem
                  className={cn(
                    buttonVariants({ variant: 'destructive' }),
                    'w-full rounded-none',
                  )}
                  asChild
                >
                  <Link href='/admin'>Admin</Link>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem
                className={cn(
                  buttonVariants({ variant: 'destructive' }),
                  'w-full rounded-none rounded-bl-[0.6rem] rounded-br-[0.6rem] hover:cursor-pointer hover:border-none hover:bg-destructive/90 hover:text-destructive-foreground/90 focus:cursor-pointer focus:border-none focus:bg-destructive/90 focus:text-destructive-foreground/90',
                )}
                onClick={() => signOut()}
              >
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );

    case 'unauthenticated':
      return (
        <>
          <Button
            onClick={() => signIn()}
            variant='outline'
            className='ml-1 hidden border-2 sm:block'
          >
            Sign In
          </Button>

          <Button
            onClick={() => signIn()}
            variant='outline'
            size='icon'
            className='ml-1 border-2 sm:hidden'
          >
            <EnterIcon />
          </Button>
        </>
      );

    default:
      return <Skeleton className='ml-1 h-7 w-7 rounded-full md:h-8 md:w-8' />;
  }
}
