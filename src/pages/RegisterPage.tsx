import React from 'react';
import { auth } from '@/firebase';
import { useAuthCreateUserWithEmailAndPassword } from '@react-query-firebase/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA } from '@/constants/schema';

import { Button } from '@/components/shared/Button';
import { AuthInput } from '@/components/shared/AuthInput';
import { AuthError } from '@/components/shared/AuthError';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { getFirebaseErrorMessage } from '@/utils/message';
import { RegisterSchema } from '@/types';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SCHEMA.REGISTER),
  });
  const { isLoading, mutate, error } =
    useAuthCreateUserWithEmailAndPassword(auth);

  const onSubmit = async ({ email, password }: RegisterSchema) => {
    mutate(
      { email, password },
      {
        onSuccess: (data) => console.log(data),
      },
    );
  };

  return (
    <AuthLayout title="회원가입">
      {error && <AuthError>{getFirebaseErrorMessage(error.code)}</AuthError>}
      <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          type="email"
          label="이메일"
          errorMessage={errors.email?.message}
          required
          placeholder="이메일을 입력하세요."
          {...register('email')}
        />
        <AuthInput
          type="password"
          label="비밀번호"
          errorMessage={errors.password?.message}
          required
          placeholder="비밀번호를 입력하세요."
          {...register('password')}
        />
        <AuthInput
          type="password"
          label="비밀번호 확인"
          errorMessage={errors.passwordConfirm?.message}
          required
          placeholder="다시 한 번 비밀번호를 입력하세요."
          {...register('passwordConfirm')}
        />
        <Button
          type="submit"
          disabled={!isValid || !isDirty}
          buttonColor="brand"
          buttonType="fullWidth"
          className="mt-4"
          isLoading={isLoading}
        >
          회원가입
        </Button>
      </form>
    </AuthLayout>
  );
}
