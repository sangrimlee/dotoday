import { InferType } from 'yup';
import { COLOR } from '@/constants/theme';
import { PAGE_URL } from '@/constants/url';
import {
  FIND_PASSWORD_SCHEMA,
  LOGIN_SCHEMA,
  REGISTER_SCHEMA,
  RESET_PASSWORD_SCHEMA,
  TASK_SCHEMA,
} from '@/constants/schema';
import { FIREBASE_ERROR_MESSAGE } from '@/constants/message';
import { STORAGE_KEY } from '@/constants/storage';

export type PageURLType = keyof typeof PAGE_URL;

export type ColorType = keyof typeof COLOR;

export type LoginSchema = InferType<typeof LOGIN_SCHEMA>;
export type RegisterSchema = InferType<typeof REGISTER_SCHEMA>;
export type FindPasswordSchema = InferType<typeof FIND_PASSWORD_SCHEMA>;
export type ResetPasswordSchema = InferType<typeof RESET_PASSWORD_SCHEMA>;
export type TaskSchema = InferType<typeof TASK_SCHEMA>;

export type FirebaseErrorCode = keyof typeof FIREBASE_ERROR_MESSAGE;

export type StorageKeyType = keyof typeof STORAGE_KEY;

export type ThemeType = 'light' | 'dark';

export type QueryResult<T> = T & { _id: string };
