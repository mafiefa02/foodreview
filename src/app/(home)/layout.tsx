import React, { PropsWithChildren } from 'react';
import Container from '~/components/layout/container';
import Navbar from '~/components/layout/navbar/index';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
