'use client';
import { HeroUIProvider } from '@heroui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <div suppressHydrationWarning>{children}</div>
    </HeroUIProvider>
  );
}
