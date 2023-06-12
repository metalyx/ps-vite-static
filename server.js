import express from "express";

const app = express();

app.use(express.static("dist"));

app.listen(5000, () => {
  console.log("server serves static files");
});
