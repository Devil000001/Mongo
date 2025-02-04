const http = require('http');

const { MongoClient,ObjectId} = require('mongodb');
const url = "mongodb+srv://devkadawla66:Xfwji7wsXm6aQrAl@cluster0.rawuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "Routing";
const collectionName = "RoutingCollection";
let db;

MongoClient.connect(url).then((Client)=>{
    console.log("Connecting Succesfully");
    db=Client.db(dbName);
}).catch((err)=>console.error("Failed to connect with mongodb", err));



async function main(){
    try{
        await client.connect();
        console.log("Database connected successfuly");
        const db = client.db(dbName);
        const userCollection = db.collection("users");
        console.log("Inserting data in users collections")
        await userCollection.insertMany([
            {_id:1,name:"Dev",age:33},
            {_id:2,name:"aman",age:28},
            {_id:3,name:"ishrar",age:30},
        ])
        console.log("data inserted successfuly");
    }
    catch (err) {
        console.error("Error connecting to the database:",err);
    }
    finally{
        await client.close();
    }


}


const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is running on port 3000");
});