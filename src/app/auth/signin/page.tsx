"use client";

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
import { credentialAtom } from '@/app/atom';
import { useRouter } from 'next/navigation';

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

    const setCredential = useSetRecoilState(credentialAtom);

    const onSubmit = handleSubmit(async (data) => {
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