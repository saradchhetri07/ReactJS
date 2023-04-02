import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

//create rooms
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.id;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: {
          rooms: savedRoom._id,
        },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

//create a
//get a rooms
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(201).json(Rooms);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const rooms = await Room.findById(req.params.id, { new: true });
    res.status(201).json(Rooms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updateRoom);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(req.params.hotelId, {
        $pull: {
          rooms: req.params.id,
        },
      });
    } catch (error) {
      next(error);
    }
    res.status(201).json("room is deleted");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
