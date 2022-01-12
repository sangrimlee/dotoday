export const UNKNOWN_ERROR_MESSAGE = '알 수 없는 오류가 발생하였습니다.';

export const FIREBASE_ERROR_MESSAGE = {
  ['auth/email-already-in-use']: '이미 사용중인 이메일입니다.',
  ['auth/wrong-password']: '로그인 정보를 다시 한 번 확인해주세요.',
  ['auth/user-not-found']: '일치하는 사용자 정보를 찾을 수 없습니다.',
};

export type FirebaseErrorCode = keyof typeof FIREBASE_ERROR_MESSAGE;

export const isFirebaseErrorCode = (
  errorCode: string,
): errorCode is FirebaseErrorCode => errorCode in FIREBASE_ERROR_MESSAGE;

export const getFirebaseErrorMessage = (errorCode: string) => {
  if (isFirebaseErrorCode(errorCode)) {
    return FIREBASE_ERROR_MESSAGE[errorCode];
  }
  return UNKNOWN_ERROR_MESSAGE;
};
