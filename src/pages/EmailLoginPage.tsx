import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/firebase';
import { useAuthSignInWithEmailAndPassword } from '@react-query-firebase/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA } from '@/constants/schema';

import { Button } from '@/components/shared/Button';
import { AuthInput } from '@/components/shared/AuthInput';
import { AuthError } from '@/components/shared/AuthError';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { LoginSchema } from '@/types';
import { getFirebaseErrorMessage } from '@/utils/message';
import { PAGE_URL } from '@/constants/url';

export default function EmailLoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: yupResolver(SCHEMA.LOGIN),
  });
  const { mutate, isLoading, error } = useAuthSignInWithEmailAndPassword(auth);

  const onSubmit = ({ email, password }: LoginSchema) => {
    mutate(
      { email, password },
      {
        onSuccess: () => navigate(PAGE_URL.DASHBOARD, { replace: true }),
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
          placeholder="이메일을 입력하세요."
          {...register('email')}
        />
        <AuthInput
          type="password"
          label="비밀번호"
          errorMessage={errors.password?.message}
          placeholder="비밀번호를 입력하세요."
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
