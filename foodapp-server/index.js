const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
require("dotenv").config();
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

// username : arfainsabasaba
// password: wT6LLthr8viEa3vE

// middlewares
// app.use(cors());
app.use(cors({ origin: "*" }));

app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gctiqmx.mongodb.net/?retryWrites=true&w=majority`;

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gctiqmx.mongodb.net/?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tlsAllowInvalidCertificates: true,
});

async function run() {
  try {
    console.log("attempting to connect");
    await client.connect();
    console.log("connected");

    // databases and collections
    const menuCollections = client.db("foodappdb").collection("menus");

    const cartCollections = client.db("foodappdb").collection("cartItems");

    // all menu items
    app.get("/menu", async (req, res) => {
      console.log("reached to menu route");
      const result = await menuCollections.find().toArray();
      res.send(result);
    });

    // all alerts opr
    app.post("/carts", async (req, res) => {
      // const cartItem = req.body;
      // const result = await cartCollections.insertOne(cartItem);
      // res.send(result);
      try {
        const cartItem = req.body;
        const result = await cartCollections.insertOne(cartItem);
        res.json(result); // Return the result as JSON
      } catch (error) {
        console.error("Error in /carts route:", error);
        res.status(500).json({ error: "Internal Server Error" }); // Return an error JSON
      }
    });

    // get carts acc to email
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const filter = { email: email };
      const result = await cartCollections.find(filter).toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("hello world!");
});

// Log all registered routes
// console.log("Registered Routes:", app._router.stack);

app.listen(PORT, () => {
  console.log(`App started on port: ${PORT}`);
});
