const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iam7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

        const database = client.db("productsDB");
        const productsCollection = database.collection("products")

        app.get('/products', async (req, res) => {
            const result = await productsCollection.find().toArray();
            res.send(result);
        });


        // app.get('/products/:email', async (req, res) => {
        //     const result = await productsCollection.find({ email: req.params.email }).toArray();
        //     res.send(result);
        // })

        app.get('/products/email/:email', async (req, res) => {
            const result = await productsCollection.find({ email: req.params.email }).toArray();
            res.send(result);
        });
        

        app.get('/products/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await productsCollection.findOne(query);
            res.send(result)
        })

        app.post('/products', async (req, res) => {
            const product = req.body;
            const result = await productsCollection.insertOne(product);
            res.send(result)
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Conceptual 10 Server')
})

app.listen(port, () => {
    console.log(`Server Open by This Port ${port}`)
})