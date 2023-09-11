"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getMockQueryClient } from './mock';

type Props = {
    children: React.ReactNode,
    mocked?: boolean,
};

const queryClient = new QueryClient();
const mockedQueryClient = getMockQueryClient();

function APIClientProvider({ children, mocked }: Props) {
    const client = mocked ? mockedQueryClient : queryClient;

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default APIClientProvider;