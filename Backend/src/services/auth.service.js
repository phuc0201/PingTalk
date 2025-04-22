const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ShortUniqueId = require("short-unique-id");
const { COLORS } = require("../config/constants/models.constants");
const { User, Token } = require("../models");
const ApiError = require("../utils/ApiError");
const { tokenTypes } = require("../config/tokens");

module.exports = {
  register: async (userBody) => {
    if (await User.isEmailTaken(userBody.email)) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Email already taken");
    }
    if (await User.isUsernameTaken(userBody.username)) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Username already taken");
    }
    userBody.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const user = await User.create(userBody);
    return user;
  },

  login: async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordMatch(password))) {
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        "Incorrect email or password"
      );
    }
    return user;
  },

  logout: async ({ refreshToken }) => {
    const token = await Token.findOne({
      token: refreshToken,
      type: tokenTypes.REFRESH,
      blacklisted: false,
    });

    if (!token) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Not found token");
    }

    await token.deleteOne();
  },
};
