export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IUser {
  fullname: string;
  username: string;
  email: string;
  password: string;
  role: string;
  isEmailVerified: boolean;
  color: string;
}

export interface IToken {
  token: string;
  expires: string;
}

export interface ITokens {
  access: IToken;
  refresh: IToken;
}
