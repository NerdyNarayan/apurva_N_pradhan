"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ErrorBoundary } from "react-error-boundary";
import { MainErrorFallback } from "@/components/errors/main";
import { Toaster } from "@/components/ui/toaster";
export function AppProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <NextThemesProvider {...props}>
        {children}
        <Toaster />
      </NextThemesProvider>
    </ErrorBoundary>
  );
}
