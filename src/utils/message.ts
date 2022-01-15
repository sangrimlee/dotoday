import { isFirebaseErrorCode } from '@/types/typeGuard';
import {
  FIREBASE_ERROR_MESSAGE,
  UNKNOWN_ERROR_MESSAGE,
} from '@/constants/message';

export const getFirebaseErrorMessage = (errorCode: string) => {
  if (isFirebaseErrorCode(errorCode)) {
    return FIREBASE_ERROR_MESSAGE[errorCode];
  }
  return UNKNOWN_ERROR_MESSAGE;
};
