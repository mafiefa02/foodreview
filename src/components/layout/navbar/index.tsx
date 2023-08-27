import Link from 'next/link';
import React from 'react';
import { notoSerif } from '~/fonts/fonts';

import NavbarNavigation from './navigation';
import UserAction from './user-action';

export default function Navbar() {
  return (
    <header className='fixed top-0 w-full'>
      <nav className='container flex items-center justify-between py-3'>
        {/* Logo or brand */}
        <Link href={`/`}>
          <h3 className={`${notoSerif.className} text-2xl font-bold`}>
            Setara Biru
          </h3>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-1 md:flex'>
          <NavbarNavigation href={`/`}>Home</NavbarNavigation>

          <NavbarNavigation href={`/places`}>Places</NavbarNavigation>

          <NavbarNavigation href={`/about`}>About</NavbarNavigation>

          <UserAction />
        </div>
      </nav>
    </header>
  );
}
