
// create package.json file - npm init -y
//install mongodb - npm i mongodb
// cluster -> connect

// require("mongodb");
// const {MongoClient}=require("mongodb");
// const url="mongodb+srv://devkadawla66:QNrOhnMeDQMM8Ich@cluster0.ke2og.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const client = new MongoClient(url);
// const bdName = "user";
// async function main(){
//     try{
//         await client.connect();
//         console.log("database connected successfully");

//     }
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         await client.close();
//     }
// }

// main().catch(console.error)









// const { MongoClient } = require("mongodb");
// /// url -> global url 
// const url = "mongodb+srv://devkadawla66:pG5RVDm5vJ89E4Ha@cluster0.2hmvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const dbName = "user";

// async function main() {
//     try {
//         await client.connect();
//         // data insertion 
//         // insertone -> inserting one data insertmany-> inserting data more than one
//         console.log("Database connected successfully");
//         const db=client.db(dbName);
//         const userCollection = db.collection("users");
//         console.log("Inserting data in users collections")
//         await userCollection.insertMany([
//             {_id:1,name:"Aryan",age:33},
//             {_id:2,name:"Aman",age:30},
//             {_id:3,name:"Shahil",age:20},
//         ])

//         console.log("data inserted successfully")

//     } catch (err) {
//         console.error("Error connecting to the database:", err);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);












const { MongoClient } = require("mongodb");
/// url -> global url 
const url = "mongodb+srv://devkadawla66:QNrOhnMeDQMM8Ich@cluster0.ke2og.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
        

        let result=await ordersCollection.aggregate([{
            $lookup:{
                from:"ordersCollection"
            }
        }])
    } catch (err) {
        console.error("Error connecting to the database:", err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
