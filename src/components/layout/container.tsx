import { PropsWithChildren, PropsWithoutRef } from 'react';

export default function Container({
  children,
  ...props
}: PropsWithChildren<PropsWithoutRef<JSX.IntrinsicElements['section']>>) {
  return (
    <section
      className='container'
      {...props}
    >
      {children}
    </section>
  );
}
