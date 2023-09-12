import { ReactNode } from 'react';

type Props = { children: ReactNode, required: boolean };

function AuthProvider({ children, required }: Props) {
    return (
        <>
            {children}
        </>
    );
}

export default AuthProvider;