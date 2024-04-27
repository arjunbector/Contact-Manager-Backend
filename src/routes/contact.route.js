import { Router } from "express";
import {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} from "../controllers/contact.controller.js";
import validateToken from "../middlewares/auth.middleware.js";
const router = Router();

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
// router.route("/").post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

export default router;
