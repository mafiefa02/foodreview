'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export default function NavbarNavigation({
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  const pathname = usePathname();
  const active = pathname === props.href;

  return (
    <Button
      className={cn(active && 'font-bold')}
      variant={'link'}
      asChild
    >
      <Link {...props}>{children}</Link>
    </Button>
  );
}
