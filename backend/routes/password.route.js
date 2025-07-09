import express from "express";
import { authenticateJWT } from "../middleware/auth.middleware.js";
import {
  addPassword,
  getPasswords,
  editPassword,
  deletePassword
} from "../controllers/password.controller.js";

const router = express.Router();

// All routes below require authentication
router.use(authenticateJWT);

router.post("/", addPassword); // Add new password
router.get("/", getPasswords); // Get all passwords
router.put("/:id", editPassword); // Edit password
router.delete("/:id", deletePassword); // Delete password

export default router; 