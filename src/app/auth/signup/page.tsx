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

type formInputs = {
    name: string;
    password: string;
    passwordConfirm: string;
};

function SignUp() {
    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<formInputs>();

    const onSubmit = handleSubmit((data) => {
        // フォームで入力されたデータをコンソールに表示
        console.log(data)
    });

    const isNameError = !!errors.name;
    const isPasswordError = !!errors.password;
    const isPasswordConfirmError = !!errors.passwordConfirm;

    return (
        <form onSubmit={onSubmit}>
            <Stack>
                <FormControl isInvalid={isNameError}>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <Input
                        id='name'
                        type='text'
                        {...register('name', {
                            required: "ユーザー名を入力してください"
                        })}
                    />
                    {isNameError && (
                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
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
                <FormControl isInvalid={isPasswordConfirmError}>
                    <FormLabel htmlFor='confirm'>Confirm</FormLabel>
                    <Input
                        id='confirm'
                        type='password'
                        {...register('passwordConfirm', {
                            required: "確認用パスワードを入力してください",
                            validate: (value) => value === getValues("password") || "パスワードが一致しません"
                        })}
                    />
                    {isPasswordConfirmError && (
                        <FormErrorMessage>{errors.passwordConfirm?.message}</FormErrorMessage>
                    )}
                </FormControl>
                <Button type="submit">ログイン</Button>
            </Stack>
        </form>
    )
}

export default SignUp;