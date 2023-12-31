"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import APIClientProvider from "./api/APIClientProvider";
import AuthProvider from "./auth/AuthProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <APIClientProvider mocked={false}>
        <AuthProvider disabled={false}>
          <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </CacheProvider>
        </AuthProvider>
      </APIClientProvider>
    </RecoilRoot>
  );
}
