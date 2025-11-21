import { Router } from "express";
import User from "../models/user.js";
import { generateToken } from "../jwt/Authentication.js";
import cookieParser from "cookie-parser";

const router = Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken({ id: user._id });
    res.cookie("Authorization", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const user = await User.create({ name, email, password });
  const token = generateToken({ id: user._id });
  res.cookie("Authorization", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  res.status(201).json({ message: "User registered successfully", user });
});

router.post("/logout", (req, res) => {
  res.clearCookie("Authorization", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",    
  });

  res.json({ message: "Logout successful" });
});

export default router;
