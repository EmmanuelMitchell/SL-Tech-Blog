import User from "../Models/userModel.js";
import bcryptjs from "bcryptjs";
import { handleError } from "../utils/error.js";
import Jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

export const signupController = async (req, res, next) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(handleError(404, "All fields are required"));
  }
  //   hashPassword
  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    await res.status(200).json("SingUp Successfully");
  } catch (error) {
    next(error);
  }
};

export const singinController = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(handleError(400, "All fields are required"));
  }
  const valideUser = await User.findOne({ email });
  if (!valideUser) {
    return next(handleError(404, "User not found"));
  }

  const validePassword = bcryptjs.compareSync(password, valideUser.password);
  if (!validePassword) {
    return next(handleError(404, "Incorrect Password"));
  }

  const { password: pass, ...rest } = valideUser._doc;

  const token = Jwt.sign({ id: valideUser._id }, process.env.JWT_SECRET);
  res.status(200).cookie("access_token", token, { httpOnly: true }).json(rest);
};
