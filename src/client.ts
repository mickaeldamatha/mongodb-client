import { MongoClient } from "mongodb";

let client: MongoClient;

export default class Client {
  static async dbLink() {
    try {
      client = await MongoClient.connect(process.env.MONGO_URI);
      return client;
    } catch (error) {
      return error;
    }
  }

  static async dbUnlink() {
    try {
      await client.close();
    } catch (error) {
      return error;
    }
  }
}
