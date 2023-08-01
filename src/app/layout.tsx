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
        {' '}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
