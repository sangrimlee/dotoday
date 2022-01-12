import React, { useCallback, useState } from 'react';

export default function useToggle(
  initialState?: boolean,
): [boolean, () => void] {
  const [state, setState] = useState<boolean>(initialState ?? false);

  const onToggle = useCallback(() => {
    setState(!state);
  }, []);

  return [state, onToggle];
}
