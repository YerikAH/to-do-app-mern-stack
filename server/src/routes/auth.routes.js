import { Router } from "express";
import {
  login,
  logout,
  register,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { verifyAccount } from "../middlewares/verifyAccount.js";
const router = Router();

router.post(
  "/register",
  validateSchema(registerSchema),
  verifyAccount,
  register
);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;
