const express = require("express");
const app = express();
const movieRouter = require("./routes/hotels")

app.use(express.json());
app.use(movieRouter);

app.get("/", (req, res) => {
  res.send("Hello From Mern Developer")
})


app.listen(8080, () => {
  console.log(`Server is up and running on 8080`)
})

