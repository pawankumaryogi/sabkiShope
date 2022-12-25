import express from "express";

import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserById,
  updateUser,
} from "../controllers/userControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/login").post(authUser);
router.route("/").post(registerUser).get(getUsers);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUsers)
  .get(getUserById)
  .put(protect, admin, updateUser);

export default router;
