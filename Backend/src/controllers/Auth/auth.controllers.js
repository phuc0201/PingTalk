const { authService, tokenService } = require("../../services");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../../utils/catchAsync");
const moment = require("moment");
const config = require("../../config/config");

const refreshTokenExpires = moment().add(
  config.jwt.refreshExpirationDays,
  "days"
);
const accessTokenExpires = moment().add(
  config.jwt.accessExpirationMinutes,
  "minutes"
);

const accessTokenMaxAge = accessTokenExpires.diff(moment());
const refreshTokenMaxAge = refreshTokenExpires.diff(moment());

const setAuthTokensToCookie = (res, tokens) => {
  if (tokens) {
    res.cookie("accessToken", tokens.access.token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: accessTokenMaxAge,
    });

    res.cookie("refreshToken", tokens.refresh.token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: refreshTokenMaxAge,
    });
  }
};

module.exports = {
  register: catchAsync(async (req, res) => {
    const user = await authService.register(req.body);
    const tokens = await tokenService.generateAuthTokens(user);
    setAuthTokensToCookie(res, tokens);
    res.status(StatusCodes.CREATED).send({ user });
  }),

  login: catchAsync(async (req, res) => {
    const user = await authService.login(req.body);
    const tokens = await tokenService.generateAuthTokens(user);
    setAuthTokensToCookie(res, tokens);
    res.status(StatusCodes.CREATED).send({ user: user, tokens: tokens });
  }),

  logout: catchAsync(async (req, res) => {
    await authService.logout(req.body);
    res.status(StatusCodes.NO_CONTENT).send();
  }),

  refreshToken: catchAsync(async (req, res) => {
    const tokens = await authService.refreshAuth(req.body);
    setAuthTokensToCookie(res, tokens);
    res.send({ ...tokens });
  }),

  changePassword: async (req, res) => {},
};
