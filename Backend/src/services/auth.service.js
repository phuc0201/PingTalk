const { StatusCodes } = require("http-status-codes");
const { COLORS } = require("../config/constants/models.constants");
const { User, Token } = require("../models");
const ApiError = require("../utils/ApiError");
const { tokenTypes } = require("../config/tokens");
const tokenService = require("./token.service");
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

  /**
   * Refresh auth tokens
   * @param {string} refreshToken
   * @returns {Promise<Object>}
   */
  refreshAuth: async ({ refreshToken }) => {
    try {
      const refreshTokenDoc = await tokenService.verifyToken(
        refreshToken,
        tokenTypes.REFRESH
      );

      const user = await User.findById(refreshTokenDoc.user);
      if (!user) {
        throw new Error();
      }
      await refreshTokenDoc.deleteOne();
      const tokens = await tokenService.generateAuthTokens(user);
      return tokens;
    } catch (error) {
      if (
        error.message === "Token not found" ||
        error.message === "jwt expired"
      ) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, "Token not found");
      }
      throw new ApiError(StatusCodes.UNAUTHORIZED, "Please authenticate");
    }
  },
};
