interface ApiResponse<T> {
  code: number;
  message: string;
  detail?: string;
  data: T;
  failure?: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  imp_uid: string;
  isMerge: boolean;
}

export interface CheckEmailParams {
  email: string;
}

export type SignInResponseData = {
  accessToken: string;
};

export type CheckEmailResponseData = {
  authCode: string;
};

export interface UpdateMyPasswordParams {
  email: string;
  memberRole: string;
  newPassword: string;
}

export type CheckEmailResponse = ApiResponse<CheckEmailResponseData>;

export type SignInResponse = ApiResponse<SignInResponseData>;
export type SignUpResponse = ApiResponse<string>;
export type CheckMyEmailResponse = ApiResponse<{ authCode: string }>;
export type UpdateMyPasswordBeforeLoginResponse = ApiResponse<string>;