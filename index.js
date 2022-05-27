const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
  







async function run (){

    try{

// insert grocery collection

        // app.post('/grocery', async (req, res)={
        
        // })













        } finally{

        }

}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Grocery on UI");
});

app.listen(port, () => {
  console.log(`Grocery app listening on port ${port}`);
})