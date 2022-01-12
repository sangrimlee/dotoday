import React from 'react';
import { auth } from '@/firebase';
import { useAuthSignInWithPopup } from '@react-query-firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

import { Button } from '../Button';

export default function GoogleLoginButton() {
  const { mutate, isLoading } = useAuthSignInWithPopup(auth);

  const onGoogleLogin = () => {
    mutate({
      provider: new GoogleAuthProvider(),
    });
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
