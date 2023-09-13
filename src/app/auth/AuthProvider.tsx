"use client";

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { credentialAtom, configAtom } from '@/app/atom';
import { TCredential } from '@/app/type';
import { getMockData } from '@/app/api/mock';

const publicPaths = [
    '/',
    '/auth/signin',
    '/auth/signup',
];

function isPublic(path: string) {
    return publicPaths.includes(path);
}

type Props = { children: ReactNode, disabled?: boolean };

function AuthProvider({ children, disabled }: Props) {
    const path = usePathname();
    const credential = useRecoilValue(credentialAtom);
    const setCredential = useSetRecoilState(credentialAtom);
    const config = useRecoilValue(configAtom);
    const setConfig = useSetRecoilState(configAtom);

    useEffect(() => {
        setConfig(config => ({ ...config, loginDisabled: !!disabled })); 
    }, [disabled]);

    useEffect(() => {
        if (disabled && config.mocked && !credential) {
            const credential = getMockData<TCredential>("credential")!;
            setCredential(credential);
        }
    }, [disabled, config.mocked, credential]);

    if (!disabled && !isPublic(path) && !credential) {
        return (
            <pre>サインインしてください。</pre>
        );
    }

    return (
        <>
            {children}
        </>
    );
}

export default AuthProvider;