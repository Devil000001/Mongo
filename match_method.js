const { MongoClient } = require("mongodb");
 
const url = "mongodb+srv://devkadawla66:hNRHPQVj7INiVPBo@matchmethod.uj9ux.mongodb.net/?retryWrites=true&w=majority&appName=MatchMethod";
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbName = "user";

async function main() {
    try {
        await client.connect();
        // data insertion 
        // insertone -> inserting one data insertmany-> inserting data more than one
        console.log("Database connected successfully");
        const db=client.db(dbName);
        const userCollection = db.collection("users");
        const ordersCollection = db.collection("orders")
        console.log("Inserting data in users collections")
        // await userCollection.insertMany([
        //     {_id:1,name:"Aryan",age:33},
        //     {_id:2,name:"Aman",age:30},
        //     {_id:3,name:"Shahil",age:20},
        //     ])

        // await ordersCollection.insertMany([
        //     {orderid:101,userid:1,item:"leptop",price:12000},
        //     {orderid:102,userid:2,item:"mouse",price:1000},
        //     {orderid:103,userid:3,item:"keyword",price:1800}
        // ])


        const result = await userCollection.aggregate([
            {
                $lookup:{
                    from : "orders",
                    localFeild: "id",
                    foreignFeild : "userid",
                    as:"orderDetails"
                }
            }
        ]).toArray();



        console.log(result);

    } catch (err) {
        console.error("Error connecting to the database:", err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);