const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
// const uri ='mongodb+srv://fakhreza:mongodb@cluster0.3uhmq.mongodb.net/Content?retryWrites=true&w=majority'
// const uri = 'mongodb://fakhreza:mongodb@cluster0-shard-00-00.3uhmq.mongodb.net:27017,cluster0-shard-00-01.3uhmq.mongodb.net:27017,cluster0-shard-00-02.3uhmq.mongodb.net:27017/Content?ssl=true&replicaSet=atlas-lcsqg1-shard-0&authSource=admin&retryWrites=true&w=majority'
// const uri =
//   "mongodb://fakhreza:mongodb@cluster0-shard-00-00.3uhmq.mongodb.net:27017,cluster0-shard-00-01.3uhmq.mongodb.net:27017,cluster0-shard-00-02.3uhmq.mongodb.net:27017/Content?ssl=true&replicaSet=atlas-lcsqg1-shard-0&authSource=admin&retryWrites=true&w=majority";

let database = null;

async function connect() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const db = await client.db("Pemakaman");
    database = db;
    return { db, client };
  } catch (err) {
    console.log(err);
  }
}

function getDatabase() {
  return database;
}

module.exports = {
  connect,
  getDatabase,
};
