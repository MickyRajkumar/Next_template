import type { Metadata } from 'next';
import '@/styles/globals.css';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Next.js Starter Template',
  description:
    'This project is a starter template for Next.js using TypeScript and Tailwind CSS, and includes all the VSCode, Prettier, ESLint settings.',
  authors: [{ name: 'Micky Rajkumar', url: 'https://mickyrajkumar.tech' }],
  creator: 'Micky Rajkumar'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
