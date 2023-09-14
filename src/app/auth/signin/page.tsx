"use client";

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil';
import {
    Input,
    Button,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Stack
} from "@/app/components/common";
import { signin } from '@/app/api/helper';
import { credentialAtom } from '@/app/state';
import { useMocked } from '@/app/state/hooks';
import { getMockData } from '@/app/api/query';
import { TCredential } from '@/app/type';

type formInputs = {
    email: string;
    password: string;
};

function SignIn() {
    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<formInputs>();

    const mocked = useMocked();
    const setCredential = useSetRecoilState(credentialAtom);

    const onSubmit = handleSubmit(async (data) => {
        if (mocked) {
            console.log("signin");
            console.log({
                email: data.email,
                password: data.password
            });

            const credential = getMockData<TCredential>("credential")!;
            setCredential(credential);

            router.push("/");

            return;
        }

        const credential = await signin(data.email, data.password);
        setCredential(credential);

        router.push("/");
    });

    const isEmailError = !!errors.email;
    const isPasswordError = !!errors.password;

    return (
        <form onSubmit={onSubmit}>
            <Stack>
                <FormControl isInvalid={isEmailError}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        {...register('email', {
                            required: "メールアドレスを入力してください"
                        })}
                    />
                    {isEmailError && (
                        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl isInvalid={isPasswordError}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input
                        id='password'
                        type='password'
                        {...register('password', {
                            required: "パスワードを入力してください"
                        })}
                    />
                    {isPasswordError && (
                        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                    )}
                </FormControl>
                <Button type="submit">ログイン</Button>
            </Stack>
        </form>
    )
}

export default SignIn;