const express = require("express");
const connectToMongo = require("./db");
const app = express();
var cookieParser = require("cookie-parser");
var cors = require("cors");
const user_route = require("./routes/user_route");
const post_route = require("./routes/post_route");

connectToMongo();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", user_route);
app.use("/api", post_route);
app.listen(5002);
