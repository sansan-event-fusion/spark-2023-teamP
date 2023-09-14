"use client";

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { credentialAtom, loginDisabledSelector } from '@/app/state';
import { useMocked, useSignedIn } from '@/app/state/hooks';
import { TCredential } from '@/app/type';
import { getMockData } from '@/app/api/mock';
import { reSignin } from '@/app/api/helper';

const publicPaths = [
    '/',
    '/auth/signin',
    '/auth/signup',
];

function isPublic(path: string) {
    return publicPaths.includes(path);
}

const CredentialStorageKey = "easeme_credential";

async function loadCredential(mocked=false) {
    if (mocked) {
        return null;
    }

    const authorization = sessionStorage.getItem(CredentialStorageKey);

    if (authorization) {
        try {
            const credential = await reSignin(authorization);
            return credential;
        } catch (e) {
            clearCredential();
            return null;
        }
    }

    return null;
}

function storeCredential(credential: TCredential) {
    sessionStorage.setItem(CredentialStorageKey, credential.authorization);
}

function clearCredential() {
    sessionStorage.removeItem(CredentialStorageKey);
}

type Props = { children: ReactNode, disabled?: boolean };

function AuthProvider({ children, disabled }: Props) {
    const path = usePathname();
    const signedIn = useSignedIn();
    const mocked = useMocked();
    const credential = useRecoilValue(credentialAtom);
    const setCredential = useSetRecoilState(credentialAtom);
    const setLoginDisabled = useSetRecoilState(loginDisabledSelector);

    useEffect(() => {
        (async () => {
            if (!signedIn) {
                const credential = await loadCredential(mocked);
                if (credential) {
                    setCredential(credential);
                }
            }
        })();
    }, []);

    useEffect(() => {
        if (credential) {
            storeCredential(credential);
        } else {
            clearCredential();
        }
    }, [credential]);

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