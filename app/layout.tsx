import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Benallal - Web Developer',
  description: 'Welcome to the portfolio of Abdeladim Benallal, a passionate web developer showcasing innovative and cutting-edge web solutions.',
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>	
				{children}		
			</body>
    </html>
  )
}
