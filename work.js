
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
        // await userCollection.insertMany([
        //     {_id:4,name:"Dev",age:33},
        //     {_id:5,name:"Rishabh",age:20},
        //     {_id:6,name:"Shivam",age:25},
        // ])
        // await ordersCollection.insertMany([
        //     {orderid:101,userId:2,item:"Laptop",price:1200},
        //     {orderid:102,userId:3,item:"Mouse",price:1800},
        //     {orderid:103,userId:4,item:"Keyboard",price:1400}
        // ])

        // finding all users-> find method
        // empty object -> all users
        // const allusers= await userCollection.find({}).toArray();
        // console.log(allusers)

        // find out single user -> finOne
        // console.log("Finding one user")
        // const findOneuser= await userCollection.findOne({name: 'Aryan'});
        // console.log("Single User Found",findOneuser)
        // console.log("data inserted successfully")
        // Update the user => updateOne updateMany
        // set method 
        // const updateResult =await userCollection.updateOne({name:"Shahil"},{$set:{age:25}});
        // console.log("Updated Result",updateResult);
        // delete user 
        // console.log("Deleting a user");
        // const deleteuser= await userCollection.deleteOne({name:"Shahil",name:"Aryan"});
        // console.log("User Deleted Successfully",deleteuser);
        // filter method
        // console.log("Filter using age ");
        // const filteredUser = await userCollection.find({age:{$gt:25}}).toArray();
        // console.log("Values are found",filteredUser);
        // aggregate queries
        // lookup -> join operations with other collection
        // users -> orders 
        // unwind method
        // match method -> Filter Document on some specific value
        // group method  ->
        const result = await userCollection.aggregate([
            {
                $lookup:{
                    from : "orders" , // Target
                    localField:"_id" , // parent collection name 
                    foreignField:"userId",
                    as:"orderDetails" // want to store as a result
                }
            },{
                $unwind:{
                    path:"$orderDetails",
                    preserveNullAndEmptyArrays:true
                }
            },
            {
                $match:{
                    "orderDetails.price":{$gt:1500},
                    // gt -> greater than
                }
            },
            {
                $group:{
                    _id : "$_id", // user Collection
                    coutOrders:{$sum:2}, // Sum of Total Orders orderCollection
                    totalSpent:{$sum:"$orderDetails.price"} // Sum of Price // orderCollection
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
