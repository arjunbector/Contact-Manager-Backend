import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  loginUser,
  registerUser,
  currentUser,
  logoutUser,
  updateUser,
} from "../controllers/user.controller.js";
import validateToken from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(validateToken, logoutUser);
router.route("/current").get(validateToken, currentUser);
router
  .route("/update")
  .put(
    validateToken,
    upload.fields([{ name: "avatar", maxCount: 1 }]),
    updateUser
  );

export default router;
