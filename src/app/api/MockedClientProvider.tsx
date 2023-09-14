"use client";

import React from 'react';
import { QueryClientProvider } from 'react-query';
import { mockedQueryClient } from './query';

type Props = {
    children: React.ReactNode,
    mocked?: boolean,
};

function MockedClientProvider({ children }: Props) {
    const client = mockedQueryClient;

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default MockedClientProvider;