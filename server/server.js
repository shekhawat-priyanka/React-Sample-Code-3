const express = require("express");
const connectDB = require("./config/db");
const { PORT } = require("./config/config");
const path = require("path");

const app = express();

//connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API Running'));

const PORT_ADDRESS = PORT || 5000;

app.use("/api/auth", require("./routes/api/auth/authuser"));
app.use("/api/admin/inquiry", require("./routes/api/admin/inquiries"));

app.listen(PORT_ADDRESS, () => console.log(`Server started on port ${PORT}`));
