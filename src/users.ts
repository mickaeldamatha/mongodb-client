import { Collection, MongoClient, ObjectId } from "mongodb";

let users: Collection;

export interface User {
  _id?: ObjectId;
  name: string;
}

export default class UserDocument {
  static async loadClient(client: MongoClient) {
    try {
      if (users) return;
      users = await client.db(process.env.MONGO_DB).collection("users");
    } catch (error) {
      return error;
    }
  }

  static async insertUser(user: User) {
    try {
      return await users.insertOne(user);
    } catch (error) {
      return error;
    }
  }

  static async findUser(user: User) {
    try {
      return await users.findOne(user);
    } catch (error) {
      return error;
    }
  }

  static async findSome(user: User) {
    try {
      return await users.find(user).toArray();
    } catch (error) {
      return error;
    }
  }

  static async findAll() {
    try {
      const list = await users.find().toArray();
      return list;
    } catch (error) {
      return error;
    }
  }

  static async deleteUser(user: User) {
    try {
      return await users.deleteOne(user);
    } catch (error) {
      return error;
    }
  }

  static async deleteAll() {
    try {
      return await users.deleteMany({});
    } catch (error) {
      return error;
    }
  }
}
