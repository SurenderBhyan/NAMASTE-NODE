require("dotenv").config();

const URI = process.env.MONGODB_URI;
if (!URI) {
  throw new Error("MONGODB_URI is not set. Add it to your .env file.");
}

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

const client = new MongoClient(URI);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //Test
  //   const newrecord = {
  //     firstname: "Surender 1",
  //     lastname: "Kumar 1",
  //     city: "Mohali 1",
  //     phonenumber: "1231231234 1",
  //   };

  //   const insertResult = await collection.insertMany([newrecord]);

  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);

  //console.log("Inserted documents =>", insertResult);

  // the following code examples can be pasted here...

  const filteredDocs = await collection
    .find({ firstname: "Surender 1" })
    .toArray();

  console.log(
    "Found documents filtered by { firstname: 'Surender1' } =>",
    filteredDocs,
  );

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
