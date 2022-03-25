import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/firebase';
import { useAuthSignInWithPopup } from '@react-query-firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { PAGE_URL } from '@/constants/url';

import { Button } from '../Button';

export default function GoogleLoginButton() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useAuthSignInWithPopup(auth);

  const onGoogleLogin = () => {
    mutate(
      {
        provider: new GoogleAuthProvider(),
      },
      {
        onSuccess: () => navigate(PAGE_URL.DASHBOARD, { replace: true }),
      },
    );
  };

  return (
    <Button
      buttonType="fullWidth"
      icon="GoogleLogoIcon"
      onClick={onGoogleLogin}
      isLoading={isLoading}
    >
      구글 계정으로 로그인
    </Button>
  );
}
