import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getMockedQueryClient } from './mock';

type Props = {
    children: React.ReactNode,
    mocked?: boolean,
};

const queryClient = new QueryClient();
const mokedQueryClient = getMockedQueryClient();

function APIClientProvider({ children, mocked }: Props) {
    const client = mocked ? mokedQueryClient : queryClient;

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default APIClientProvider;