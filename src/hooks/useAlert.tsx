import { useCallback } from 'react';

interface Props {
  message: string;
  onConfirm?: () => void;
}

export default function useAlert({ message, onConfirm }: Props) {
  const alertAction = useCallback(() => {
    window.alert(message);
    onConfirm && onConfirm();
  }, [message, onConfirm]);

  return alertAction;
}
