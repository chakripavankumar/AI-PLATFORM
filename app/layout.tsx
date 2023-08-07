import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { CrispProvider } from '@/components/crisp-provider'
import './globals.css'
import { ReactNode } from 'react';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform',
}

// Sample implementation of ToasterProvider
function ToasterProvider({ children }: { children: ReactNode }) {
  // Some logic for displaying toasts (not implemented in this example)
  return <div>{children}</div>;
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <CrispProvider />
        <body className={font.className}>
          {/* Wrap children with ToasterProvider */}
          <ToasterProvider>
            {children}
          </ToasterProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
