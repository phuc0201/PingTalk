const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ShortUniqueId = require("short-unique-id");
const { COLORS } = require("../config/constants/models.constants");
const { User } = require("../models");
const ApiError = require("../utils/ApiError");
const uid = new ShortUniqueId({
  length: 4,
  dictionary: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
});

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
};
