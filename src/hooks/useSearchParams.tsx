import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function useSearchParams() {
  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  return searchParams;
}
