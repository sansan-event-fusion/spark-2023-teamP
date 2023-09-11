"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import APIClientProvider from "./api/APIClientProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <APIClientProvider mocked={true}>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </APIClientProvider>
  );
}
