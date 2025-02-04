
const http = require('http');
const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://devkadawla66:QNrOhnMeDQMM8Ich@cluster0.ke2og.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "Restaurant";
const collectionName = "Collection";
let db;

MongoClient.connect(uri).then((client) => {
    console.log("Connected Successfully");
    db = client.db(dbName);
}).catch((err) => console.error("Failed to connect with mongodb", err));

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    if (url.startsWith('/data')) {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            const data = body ? JSON.parse(body) : {};

            if (method === 'GET') {
                const documents = await db.collection(collectionName).find().toArray();
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(documents));
            } 
            if (method === 'POST') {
                const result = await db.collection(collectionName).insertMany(data);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ insertId: result.insertedId, ...data }));
            }
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is running on port 3000");
});