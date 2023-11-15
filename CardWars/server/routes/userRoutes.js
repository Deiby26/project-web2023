// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const userController = require("../controllers/userController");

router.post(
  "/registro",
  [
    check("username", "Username is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be 6 or more characters").isLength({
      min: 4,
    }),
  ],
  userController.signUp
);

router.post("/ingresar", userController.login);

module.exports = router;
