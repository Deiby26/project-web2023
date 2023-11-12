const User = require("../models/user");
const bcrypt = require("bcryptjs");

const createUser = async (userData) => {
  // Check if the user already exists
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(userData.password, 12);

  // Create a new user
  const user = new User({
    ...userData,
    password: hashedPassword,
  });

  await user.save();

  return { id: user._id, username: user.username, email: user.email };
};

module.exports = {
  createUser,
};
