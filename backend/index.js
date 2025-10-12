const express = require('express');

const mongoose = require('mongoose');
const cors = require("cors");

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

//routes
const bookRoutes = require('./src/books/book.route.js')
app.use("/api/books", bookRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get('/', (req,res) => {
  res.send("Namaste People");
})
}

main().then(() => console.log("Mongodb Connected Successfully!")).catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

