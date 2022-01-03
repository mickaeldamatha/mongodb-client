"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const index_1 = __importDefault(require("../index"));
const { UserDocument, Client } = index_1.default;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    UserDocument.loadClient(yield Client.dbLink());
}));
test("Insert new user", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserDocument.insertUser({ name: "Agathe" });
    expect(user).toHaveProperty("insertedId");
}));
test("Users length must be 1", () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserDocument.findAll();
    expect(users.length).toBe(1);
}));
test("Delete users", () => __awaiter(void 0, void 0, void 0, function* () {
    const action = yield UserDocument.deleteAll();
    expect(action).toHaveProperty("deletedCount");
    expect(action.deletedCount).toEqual(1);
}));
test("Users length must be 0", () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserDocument.findAll();
    expect(users.length).toBe(0);
}));
test("Check disconnection", () => __awaiter(void 0, void 0, void 0, function* () {
    yield Client.dbUnlink();
    const users = yield UserDocument.findAll();
    expect(users.message).toBe("MongoClient must be connected to perform this operation");
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield UserDocument.deleteAll();
    yield Client.dbUnlink();
}));
//# sourceMappingURL=index.test.js.map