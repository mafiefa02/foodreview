import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '~/components/theme-switch';
import { notoSerif } from '~/fonts/fonts';

import {
  DrawingPinIcon,
  HomeIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons';

import NavbarNavigation from './navigation';
import UserAction from './user-action';

const links = [
  {
    href: '/',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    href: '/places',
    label: 'Places',
    icon: <DrawingPinIcon />,
  },
  {
    href: '/about',
    label: 'About',
    icon: <QuestionMarkCircledIcon />,
  },
];

export default function Navbar() {
  return (
    <>
      <header className='fixed top-0 w-full bg-background'>
        <nav className='container flex items-center justify-between py-3'>
          {/* Logo or brand */}
          <Link href={`/`}>
            <h3
              className={`${notoSerif.className} text-xl font-black md:text-2xl`}
            >
              Setara Biru
            </h3>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-1 md:flex'>
            {links.map((link) => (
              <NavbarNavigation
                key={link.href}
                href={link.href}
              >
                {link.label}
              </NavbarNavigation>
            ))}

            <ThemeSwitch />

            <UserAction />
          </div>

          {/* Mobile Navigation */}
          <div className='flex items-center gap-1 md:hidden'>
            <ThemeSwitch />

            <UserAction />
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <footer className='fixed bottom-0 w-full bg-background md:hidden'>
        <nav className='container flex items-center p-0'>
          {links.map((link) => (
            <NavbarNavigation
              key={link.href}
              href={link.href}
              mobile
            >
              <span className='mr-2'>{link.icon}</span> {link.label}
            </NavbarNavigation>
          ))}
        </nav>
      </footer>
    </>
  );
}
