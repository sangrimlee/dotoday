import React, { useEffect } from 'react';
import { auth } from '@/firebase';
import { useHistory } from 'react-router-dom';
import {
  useAuthCheckActionCode,
  useAuthConfirmPasswordReset,
} from '@react-query-firebase/auth';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ResetPasswordSchema, SCHEMA } from '@/constants/schema';
import { PAGE_URL } from '@/constants/url';

import { Button } from '@/components/shared/Button';
import { AuthInput } from '@/components/shared/AuthInput';
import { AuthError } from '@/components/shared/AuthError';
import { AuthLayout } from '@/components/layouts/AuthLayout';

import useAlert from '@/hooks/useAlert';
import useToggle from '@/hooks/useToggle';
import useSearchParams from '@/hooks/useSearchParams';
import { getFirebaseErrorMessage } from '@/constants/message';
import LandingPage from './LandingPage';

export default function ResetPasswordPage() {
  const history = useHistory();
  const searchParams = useSearchParams();
  const [isCodeValid, setIsCodeValid] = useToggle();
  const { mutate: checkActionCode } = useAuthCheckActionCode(auth);
  const onActionCodeInvalid = useAlert({
    message: '인증번호가 만료되었습니다.',
    onConfirm: () => history.replace(PAGE_URL.FIND_PASSWORD),
  });
  const onResetPassword = useAlert({
    message: '비밀번호가 변경되었습니다.',
    onConfirm: () => history.replace(PAGE_URL.EMAIL_LOGIN),
  });

  useEffect(() => {
    const oobCode = searchParams.get('oobCode');
    if (oobCode) {
      checkActionCode(oobCode, {
        onSuccess: setIsCodeValid,
        onError: onActionCodeInvalid,
      });
    } else {
      onActionCodeInvalid();
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SCHEMA.RESET_PASSWORD),
  });

  const { isLoading, mutate, error } = useAuthConfirmPasswordReset(auth);

  const onSubmit = ({ password }: ResetPasswordSchema) => {
    const oobCode = searchParams.get('oobCode') ?? '';
    mutate(
      {
        oobCode,
        newPassword: password,
      },
      {
        onSuccess: onResetPassword,
      },
    );
  };

  if (!isCodeValid) {
    return <LandingPage />;
  }

  return (
    <AuthLayout title="비밀번호 재설정">
      {error && <AuthError>{getFirebaseErrorMessage(error.code)}</AuthError>}
      <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          type="password"
          label="새 비밀번호"
          errorMessage={errors.password?.message}
          required
          placeholder="새로운 비밀번호를 입력하세요."
          {...register('password')}
        />
        <AuthInput
          type="password"
          label="새 비밀번호 확인"
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
          비밀번호 재설정
        </Button>
      </form>
    </AuthLayout>
  );
}
