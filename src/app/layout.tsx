import type { Metadata } from 'next';

import { Footer, ImportBsJS, Navbar } from '@components';
import '@assets/scss/_main.scss';

export const metadata: Metadata = {
  title: 'TOT',
  description: 'TOT PLATFORM',
  icons: {
    icon: ['/tot.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <ImportBsJS />

      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
