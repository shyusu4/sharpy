import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Header, Footer } from '@/components/index';
import './globals.css';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sharpy | Turn visitors into paid customers fast',
  description:
    'Turn your smartphone or tablet into a powerful software. Manage sales, inventory with ease; engage customers & increase your revenue.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakartaSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
