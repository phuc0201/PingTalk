const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({ sucess: false, message: "Unauthorized" });
    }

    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.accountId;
      req.role = decoded.role;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
  },

  verifyRoles: (...allowedRoles) => {
    return (req, res, next) => {
      if (!req.role) {
        return res.status(401).send({ message: "Role not assigned" });
      }
      if (!allowedRoles.includes(req.role)) {
        return res.status(403).send({
          message: "Forbidden: You do not have the required permission",
        });
      }

      next();
    };
  },
};
