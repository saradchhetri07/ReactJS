import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
  getUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello users you are authenticated");
// });

// router.get("/checkauthentication/:id", verifyUser, (req, res, next) => {
//   res.send("hello you are logged in and you can delete your account");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all account");
// });
//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get all hotel
router.get("/", verifyAdmin, getUsers);

//get one hotel
router.get("/:id", verifyUser, getUser);

export default router;
