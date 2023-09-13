"use client";

import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { mockedSelector } from '@/app/state';
import { getMockQueryClient } from './mock';

type Props = {
    children: React.ReactNode,
    mocked?: boolean,
};

const queryClient = new QueryClient();
const mockedQueryClient = getMockQueryClient();

function APIClientProvider({ children, mocked }: Props) {
    const client = mocked ? mockedQueryClient : queryClient;
    const setMocked = useSetRecoilState(mockedSelector);

    useEffect(() => {
        setMocked(!!mocked);
    }, [mocked]);

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default APIClientProvider;