import { Router } from "express";
import {
  loginUser,
  registerUser,
  currentUser,
  logoutUser,
} from "../controllers/user.controller.js";
import validateToken from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(validateToken, logoutUser);
router.route("/current").get(validateToken, currentUser);

export default router;
