"use client";

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { credentialAtom } from '@/app/atom';

const publicPaths = [
    '/',
    '/auth/signin',
    '/auth/signup',
];

function isPublic(path: string) {
    return publicPaths.includes(path);
}

type Props = { children: ReactNode, enabled: boolean };

function AuthProvider({ children, enabled }: Props) {
    const path = usePathname();
    const credential = useRecoilValue(credentialAtom);

    if (enabled && !isPublic(path) && !credential) {
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