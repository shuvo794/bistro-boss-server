const express=require('express')
const app =express(express);
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 5000;


// middile ware

app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8g1rh.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const menuCollection = client.db("bistro_Db").collection("menu");
    const reviweCollection = client.db("bistro_Db").collection("reviwe");
    const cartCollection = client.db("bistro_Db").collection("carts");

    app.get('/menu',async(req,res)=>{
      const result = await menuCollection.find().toArray();
      res.send(result);
    })

    app.get('/reviwe',async(req,res)=>{
      const reviweResult=await reviweCollection.find().toArray();
      res.send(reviweResult);
    })

    // cart collection
    app.get('/carts', async (req, res) => {
      const item = req.body;
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('boss is setting on chair')
})

app.listen(port,()=>{
    console.log(`bistro boos is setting ${port}`);
})