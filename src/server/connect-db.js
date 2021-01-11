import { MongoClient } from 'mongodb';

const url = `mongodb://localhost:27017/myTasks`;
let db = null;

export async function connectDB() {
    let client = await MongoClient.connect(url, {useNewUrlParser: true});
    db = client.db();
    console.info("We Got DB, ", db);
    return db;
}

// connectDB();