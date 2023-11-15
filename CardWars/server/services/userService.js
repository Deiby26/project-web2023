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

const loginUser = async (username, email, password) => {
  // Find the user by email
  const userinDatabase = await User.findOne({ email });
  const usernameRegistered = await User.findOne({ username });

  if (!userinDatabase || !usernameRegistered) {
    throw new Error("User not found");
  }

  // Compare provided password with the hashed password in the database
  const isMatch = await bcrypt.compare(password, userinDatabase.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }

  return userinDatabase; // Or whatever data you want to return (excluding password)
};

module.exports = {
  createUser,
  loginUser,
};
