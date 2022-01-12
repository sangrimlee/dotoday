import React from 'react';
import { auth } from '@/firebase';
import { useAuthSignInWithEmailAndPassword } from '@react-query-firebase/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, SCHEMA } from '@/constants/schema';

import { Button } from '@/components/shared/Button';
import { AuthInput } from '@/components/shared/AuthInput';
import { AuthError } from '@/components/shared/AuthError';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { getFirebaseErrorMessage } from '@/constants/message';
import { useAuthContext } from '@/contexts/AuthContext';

export default function EmailLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SCHEMA.LOGIN),
  });
  const { login } = useAuthContext();
  const { mutate, isLoading, error } = useAuthSignInWithEmailAndPassword(auth);

  const onSubmit = ({ email, password }: LoginSchema) => {
    mutate(
      { email, password },
      {
        onSuccess: (userCredential) => login(userCredential.user),
      },
    );
  };

  return (
    <AuthLayout title="이메일 로그인">
      {error && <AuthError>{getFirebaseErrorMessage(error.code)}</AuthError>}
      <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          type="email"
          label="이메일"
          errorMessage={errors.email?.message}
          required
          {...register('email')}
        />
        <AuthInput
          type="password"
          label="비밀번호"
          errorMessage={errors.password?.message}
          required
          {...register('password')}
        />
        <Button
          type="submit"
          disabled={!isValid || !isDirty}
          buttonColor="brand"
          buttonType="fullWidth"
          className="mt-4"
          isLoading={isLoading}
        >
          로그인
        </Button>
      </form>
    </AuthLayout>
  );
}
