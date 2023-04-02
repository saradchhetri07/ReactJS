import { json } from "express";
import Hotel from "../models/Hotel.js";
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  console.log(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(201).json(hotels);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.findById(req.params.id, { new: true });
    res.status(201).json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updateHotel);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const newHotel = await Hotel.findByIdAndDelete(
      req.params.id,

      { new: true }
    );
    res.status(201).json(newHotel);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.params.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(201).json(list);
  } catch (e) {
    next(e);
  }
};
