import React from 'react';
import { SVGIcon } from '../SVGIcon';

interface AuthErrorProps {
  children?: React.ReactNode;
}

export default function AuthError({ children }: AuthErrorProps) {
  return (
    <div className="flex items-center mb-4 p-3 text-sm text-red font-medium  bg-red bg-opacity-10 rounded-lg">
      <SVGIcon icon="AlertCircleIcon" size={16} className="mr-2" />
      {children}
    </div>
  );
}
