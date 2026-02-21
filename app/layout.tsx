import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modern Restaurant',
  description: 'Experience the best dining with our modern restaurant website.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
