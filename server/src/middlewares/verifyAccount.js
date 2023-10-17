import User from "../models/user.model.js";

export const verifyAccount = async (req, res, next) => {
  console.log(req.body.email);
  try {
    const email = req.body.email;
    const userFound = await User.findOne({ email });
    if (!userFound) {
      next();
    } else {
      return res.status(400).json({ error: "Account already exist!" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
