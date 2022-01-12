import React from 'react';
import { auth } from '@/firebase';
import { useAuthSignOut } from '@react-query-firebase/auth';

import { Button } from '@/components/shared/Button';

export default function AppPage() {
  const { mutate } = useAuthSignOut(auth);

  return (
    <div className="flex flex-col items-center justify-center">
      <Button onClick={() => mutate()}>로그아웃</Button>
    </div>
  );
}
