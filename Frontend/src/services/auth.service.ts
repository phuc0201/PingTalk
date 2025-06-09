import { SystemContants } from "../constants/SystemContants";
import { ILoginDTO, ITokens, IUser } from "../models/Auth/auth.model";
import { client } from "./client";

export const doLogin = async (
  dto: ILoginDTO
): Promise<{ user: IUser; tokens: ITokens }> => {
  const res = await client.post<{ user: IUser; tokens: ITokens }>(
    "/auth/login",
    dto
  );
  if (res.data.tokens) {
    setTokens(res.data.tokens);
  }
  return res.data;
};

export const setTokens = (tokens: ITokens) => {
  const refreshExpires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const accessExpires = new Date(Date.now() + 30 * 60 * 1000);
  document.cookie = `${SystemContants.ACCESS_TOKEN}=${
    tokens.access.token
  }; expires=${accessExpires.toUTCString()}; path=/`;
  document.cookie = `${SystemContants.REFRESH_TOKEN}=${
    tokens.refresh.token
  }; expires=${refreshExpires.toUTCString()}; path=/`;
};

export const getAccessToken = () => {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${SystemContants.ACCESS_TOKEN}=([^;]*)`)
  );
  if (match) {
    return decodeURIComponent(match[1]);
  }
  return;
};
