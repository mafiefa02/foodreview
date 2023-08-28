'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

type NavbarNavigationProps = PropsWithChildren<LinkProps> & {
  mobile?: boolean;
};

export default function NavbarNavigation({
  children,
  mobile,
  ...props
}: NavbarNavigationProps) {
  const pathname = usePathname();

  if (!props.href) throw new Error('Missing href');

  const active = pathname.startsWith(props.href.toString());

  if (mobile) {
    return (
      <Button
        variant={active ? 'outline' : 'secondary'}
        className={cn(
          'flex-1 rounded-none border-t text-xs shadow',
          active && 'font-bold hover:bg-background/90 hover:text-foreground/90',
        )}
        asChild
      >
        <Link {...props}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button
      className={cn(active && 'font-bold')}
      variant={'ghost'}
      asChild
    >
      <Link {...props}>{children}</Link>
    </Button>
  );
}
