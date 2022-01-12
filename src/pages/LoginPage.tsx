import React from 'react';

import { PAGE_URL } from '@/constants/url';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { LinkButton } from '@/components/shared/LinkButton';
import { GoogleLoginButton } from '@/components/shared/OAuth';

export default function LoginPage() {
  return (
    <AuthLayout title="로그인">
      <div className="grid gap-y-4">
        <LinkButton
          buttonType="fullWidth"
          icon="MailIcon"
          iconColor="BRAND"
          to={PAGE_URL.EMAIL_LOGIN}
        >
          이메일로 로그인
        </LinkButton>
        <GoogleLoginButton />
      </div>
    </AuthLayout>
  );
}
