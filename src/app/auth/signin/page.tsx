"use client";

import { useForm } from 'react-hook-form'
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

type formInputs = {
    email: string;
    password: string;
};

function SignIn() {
    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<formInputs>();

    const onSubmit = handleSubmit(async (data) => {
        // フォームで入力されたデータをコンソールに表示
        const credential = await signin(data.email, data.password);
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