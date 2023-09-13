"use client";

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { credentialAtom, mockedSelector, loginDisabledSelector, signedInSelector } from '@/app/state';
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
    const signedIn = useRecoilValue(signedInSelector);
    const setCredential = useSetRecoilState(credentialAtom);
    const mocked = useRecoilValue(mockedSelector);
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