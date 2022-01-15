import { FirebaseErrorCode, ThemeType } from '@/types';
import { FIREBASE_ERROR_MESSAGE } from '@/constants/message';

export const isFirebaseErrorCode = (
  errorCode: string,
): errorCode is FirebaseErrorCode => errorCode in FIREBASE_ERROR_MESSAGE;

export const isThemeType = (theme: string | null): theme is ThemeType =>
  theme ? theme in ['light', 'dark'] : false;
