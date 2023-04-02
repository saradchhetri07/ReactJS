import express from "express";
import {
  createRoom,
  getRoom,
  updateRoom,
  deleteRoom,
  getRooms,
} from "../controllers/room.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:id", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom);

//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//get all hotel
router.get("/", getRooms);

//get one hotel
router.get("/:id", getRoom);

export default router;
