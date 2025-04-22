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

module.exports = {
  register: catchAsync(async (req, res) => {
    const user = await authService.register(req.body);
    const tokens = await tokenService.generateAuthTokens(user);
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
      res.status(StatusCodes.CREATED).send({ user });
    }
  }),

  login: async (req, res) => {},

  refreshToken: async (req, res) => {},

  changePassword: async (req, res) => {},
};
