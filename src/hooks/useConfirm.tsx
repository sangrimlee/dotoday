import React, { useCallback } from 'react';

interface Props {
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default function useConfirm({ message, onConfirm, onCancel }: Props) {
  const confirmAction = useCallback(() => {
    if (window.confirm(message)) {
      onConfirm && onConfirm();
    } else {
      onCancel && onCancel();
    }
  }, [message, onConfirm, onCancel]);

  return confirmAction;
}
