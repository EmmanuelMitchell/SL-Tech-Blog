import User from "../Models/userModel.js";
import bcryptjs from "bcryptjs";
import { handleError } from "../utils/error.js";

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
    return next(handleError(404, "All fields are required"));
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
