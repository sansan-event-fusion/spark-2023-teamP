"use client";

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { credentialAtom, configAtom } from '@/app/atom';

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
    const setConfig = useSetRecoilState(configAtom);

    useEffect(() => {
        setConfig(config => ({ ...config, loginDisabled: !!disabled })); 
    }, [disabled]);

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