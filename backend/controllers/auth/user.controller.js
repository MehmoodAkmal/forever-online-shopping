import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { accessToken, refreshToken } from "../../utils/generate.token.js";

export const loginUser = async (req, res) => {
  let response = {};
  try {
    const {email , password} = req.body;

    const user = await userModel.findOne({email: email});
    if(!user){
        return res.status(400).json({message: "User not exist"});
    };

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid Credentials"})
    };

    const userAccessToken = accessToken(user._id);
    const userRefreshToken = refreshToken(user._id);

    response.status = 200;
    response.message = {userAccessToken , userRefreshToken};
  } catch (error) {
    console.log("🚀 ~ loginUser ~ error:", error);
    response.status = 400;
    response.message = error.message;
  }
  return res.status(response.status).json(response.message);
};

export const register = async (req, res) => {
  let response = {};
  try {
    const { name, email, password } = req.body;

    const isRegistered = await userModel.findOne({ email: email });
    if (isRegistered) {
      return res.json({ success: false, message: "User already exist" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Use valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Use a strong password" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const access_token = accessToken(newUser._id);
    const refresh_token = refreshToken(newUser._id);

    await newUser.save();

    response.status = 200;
    response.message = {
      success: "User Registered Successfully",
      access_token,
      refresh_token,
    };
  } catch (error) {
    console.log("🚀 ~ register ~ error:", error);
    response.status = 400;
    response.message = error.message;
  }
  return res.status(response.status).json(response.message);
};
