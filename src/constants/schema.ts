import { object, string, ref } from 'yup';
import { REGEX } from './regex';

export const LOGIN_SCHEMA = object({
  email: string()
    .matches(REGEX.EMAIL, '이메일 주소를 정확히 입력해주세요.')
    .required(),
  password: string().required('비밀번호를 입력해주세요.'),
});

export const REGISTER_SCHEMA = object({
  email: string()
    .matches(REGEX.EMAIL, '이메일 주소를 정확히 입력해주세요.')
    .required(),
  password: string()
    .matches(
      REGEX.PASSWORD,
      '영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)',
    )
    .required(),
  passwordConfirm: string()
    .oneOf([ref('password')], '비밀번호가 일치하지 않습니다.')
    .required(),
});

export const FIND_PASSWORD_SCHEMA = REGISTER_SCHEMA.pick(['email']);

export const RESET_PASSWORD_SCHEMA = REGISTER_SCHEMA.omit(['email']);

export const SCHEMA = {
  LOGIN: LOGIN_SCHEMA,
  REGISTER: REGISTER_SCHEMA,
  FIND_PASSWORD: FIND_PASSWORD_SCHEMA,
  RESET_PASSWORD: RESET_PASSWORD_SCHEMA,
};
