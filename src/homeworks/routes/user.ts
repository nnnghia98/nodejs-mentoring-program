import { userSchema, validateSchema } from "../validations";
import {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getSuggestUsers,
} from "../controllers";

import express from "express";
export const router = express.Router();

router.get("/all", getAllUsers);
router.get("/:id", getUserById);
router.get("", getSuggestUsers);
router.post("", validateSchema(userSchema), createUser);
router.put("/:id", validateSchema(userSchema), updateUser);
router.delete("/:id", deleteUser);
