import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "User Alredy Exists." });

    // hash password

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });

    await user.save();

    res.status(201).json({ message: "User register successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "invalid crediantials" });

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ error: "invalid crediantials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_TOKEN_KEY, {
      expiresIn: "1d",
    });

    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



 
