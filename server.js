require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const connectDB = require("./config/db");
connectDB();

const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(","),
};

// Template Engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(cors(corsOptions));

//Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
