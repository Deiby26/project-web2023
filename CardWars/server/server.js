const connectDB = require("./db");
const cors = require("cors");

connectDB();

const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use("/api/users", userRoutes);
app.use(express.urlencoded({ extended: true }));

// Start the server and print the port number
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
