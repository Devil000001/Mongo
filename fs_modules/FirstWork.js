const  { mongoClient } = require("mongodb");
//-> global url
const url = "";
const client = new mongoClient(urli,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbName ="user";

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