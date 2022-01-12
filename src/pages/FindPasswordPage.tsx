import React from 'react';
import { auth } from '@/firebase';
import { useAuthSendPasswordResetEmail } from '@react-query-firebase/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FindPasswordSchema, SCHEMA } from '@/constants/schema';
import { PAGE_URL } from '@/constants/url';

import { Button } from '@/components/shared/Button';
import { LinkButton } from '@/components/shared/LinkButton';
import { AuthInput } from '@/components/shared/AuthInput';
import { AuthError } from '@/components/shared/AuthError';
import { AuthLayout } from '@/components/layouts/AuthLayout';

import useToggle from '@/hooks/useToggle';
import { getFirebaseErrorMessage } from '@/constants/message';

export default function FindPasswordPage() {
  const [isEmailSent, setIsEmailSent] = useToggle();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SCHEMA.FIND_PASSWORD),
  });
  const { isLoading, mutate, error } = useAuthSendPasswordResetEmail(auth);

  const onSubmit = ({ email }: FindPasswordSchema) => {
    mutate(
      {
        email,
      },
      {
        onSuccess: setIsEmailSent,
      },
    );
  };

  if (isEmailSent) {
    return (
      <AuthLayout
        title="이메일이 전송되었습니다."
        description="전송 받은 링크를 통해서 비밀번호를 재설정해주세요."
        hideFooter
      >
        <div className="flex mt-8">
          <LinkButton
            buttonType="fullWidth"
            buttonColor="brand"
            to={PAGE_URL.EMAIL_LOGIN}
          >
            로그인
          </LinkButton>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="비밀번호 찾기"
      description={
        <>
          가입에 사용한 이메일을 입력해주시면,
          <br />
          비밀번호를 재설정을 할 수 있는 링크가 입력하신 이메일에 전송해
          드립니다.
        </>
      }
    >
      {error && <AuthError>{getFirebaseErrorMessage(error.code)}</AuthError>}
      <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          type="email"
          label="이메일"
          errorMessage={errors.email?.message}
          required
          {...register('email')}
        />
        <Button
          type="submit"
          disabled={!isValid || !isDirty}
          buttonColor="brand"
          buttonType="fullWidth"
          className="mt-4"
          isLoading={isLoading}
        >
          이메일 인증
        </Button>
      </form>
    </AuthLayout>
  );
}
