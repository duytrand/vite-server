require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: [process.env.CORS_ORIGIN],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["Du2y", "strawberry", "pineapple"] });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
