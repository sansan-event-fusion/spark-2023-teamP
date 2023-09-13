"use client";

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { credentialAtom, loginDisabledSelector } from '@/app/state';
import { useMocked, useSignedIn } from '@/app/state/hooks';
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
    const signedIn = useSignedIn();
    const mocked = useMocked();
    const setCredential = useSetRecoilState(credentialAtom);
    const setLoginDisabled = useSetRecoilState(loginDisabledSelector);

    useEffect(() => {
        setLoginDisabled(!!disabled);
    }, [disabled]);

    useEffect(() => {
        if (disabled && mocked && !signedIn) {
            const credential = getMockData<TCredential>("credential")!;
            setCredential(credential);
        }
    }, [disabled, mocked, signedIn]);

    if (!disabled && !isPublic(path) && !signedIn) {
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