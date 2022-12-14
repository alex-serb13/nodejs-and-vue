import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const secret = process.env.TOKEN_SECRET;
const tokenValidity = "24h";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: user.email, id: user._id, name: user.name },
      secret,
      {
        expiresIn: tokenValidity,
      }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
        name: `${firstName} ${lastName}`,
      },
      secret,
      {
        expiresIn: tokenValidity,
      }
    );

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
