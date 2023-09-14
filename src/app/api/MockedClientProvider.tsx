"use client";

import React from 'react';
import { QueryClientProvider } from 'react-query';
import { getMockQueryClient } from './mock';

type Props = {
    children: React.ReactNode,
    mocked?: boolean,
};

const mockedQueryClient = getMockQueryClient();

function MockedClientProvider({ children }: Props) {
    const client = mockedQueryClient;

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default MockedClientProvider;