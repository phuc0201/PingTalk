const express = require("express");
const router = express.Router();
const authController = require("./auth.controllers");
const {
  verifyToken,
  verifyRoles,
} = require("../../middlewares/auth.middleware");
const validate = require("../../middlewares/validate.middleware");
const authValidation = require("./auth.validation");

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "example@gmail.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *               username:
 *                type: string,
 *                example: "phuc0102"
 *     responses:
 *       201:
 *         description: Account registered successfully
 */
router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "example@gmail.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: User logged successfully
 */
router.post("/login", validate(authValidation.login), authController.login);

/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     summary: Logout
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logout successful
 */

router.post("/logout", validate(authValidation.logout), authController.logout);

/**
 * @swagger
 * /api/v1/auth/protected:
 *   get:
 *     summary: Protected
 *     tags: [Auth]
 *     responses:
 *       200:
 *          description: successfully
 */
router.get(
  "/protected",
  verifyToken,
  verifyRoles("admin", "user"),
  (req, res) => {
    return res.send({
      role: req.role,
    });
  }
);

/**
 * @swagger
 * /api/v1/auth/refresh-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: "your-refresh-token"
 *     responses:
 *       200:
 *         description: Access token refreshed successfully
 *       401:
 *         description: Invalid or expired refresh token
 */
router.post("/refresh-token", authController.refreshToken);

/**
 * @swagger
 * /api/v1/auth/change-password:
 *   post:
 *     summary: Change user password
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - currentPassword
 *               - newPassword
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 example: "oldpassword123"
 *               newPassword:
 *                 type: string
 *                 example: "newpassword456"
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid input (e.g., new password too weak)
 *       401:
 *         description: Current password is incorrect or user unauthorized
 *       500:
 *         description: Internal server error
 */
router.post("/change-password", verifyToken, authController.changePassword);

module.exports = router;
