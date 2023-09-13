"use client";

import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { getMockData, getMockQueryClient } from './mock';
import { credentialAtom } from '../atom';
import { TCredential } from '../type';

type Props = {
    children: React.ReactNode,
    mocked?: boolean,
};

const queryClient = new QueryClient();
const mockedQueryClient = getMockQueryClient();

function APIClientProvider({ children, mocked }: Props) {
    const client = mocked ? mockedQueryClient : queryClient;
    const setCredential = useSetRecoilState(credentialAtom);

    useEffect(() => {
        if (mocked) {
            const credential = getMockData<TCredential>("credential")!;
            setCredential(credential);
        }
    }, [mocked]);

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default APIClientProvider;