/* eslint-disable import/order */

'use-client'

import { Providers } from 'flux/provider';
import type { Metadata } from 'next';
import StyledComponentsRegistry from 'styles/registry';

export const metadata: Metadata = {
  title: 'EXPLORE, EXPAND, EXPERIENCE',
  description: ''
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
