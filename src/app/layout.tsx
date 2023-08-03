'use client';

import type { Metadata } from 'next';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';

import theme from '../styles/theme';

export const metadata: Metadata = {
  title: 'EXP Club',
  description: 'EXP Club'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
