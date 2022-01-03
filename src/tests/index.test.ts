require("dotenv").config();
import { MongoClient } from "mongodb";
import mongoClient from "../index";
const { UserDocument, Client } = mongoClient;

beforeAll(async () => {
  UserDocument.loadClient(await Client.dbLink());
});

test("Insert new user", async () => {
  const user = await UserDocument.insertUser({ name: "Agathe" });
  expect(user).toHaveProperty("insertedId");
});

test("Users length must be 1", async () => {
  const users = await UserDocument.findAll();
  expect(users.length).toBe(1);
});

test("Delete users", async () => {
  const action = await UserDocument.deleteAll();
  expect(action).toHaveProperty("deletedCount");
  expect(action.deletedCount).toEqual(1);
});

test("Users length must be 0", async () => {
  const users = await UserDocument.findAll();
  expect(users.length).toBe(0);
});

test("Check disconnection", async () => {
  await Client.dbUnlink();
  const users = await UserDocument.findAll();
  expect(users.message).toBe(
    "MongoClient must be connected to perform this operation"
  );
});

afterAll(async () => {
  await UserDocument.deleteAll();
  await Client.dbUnlink();
});
