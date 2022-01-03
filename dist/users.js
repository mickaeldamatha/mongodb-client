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
Object.defineProperty(exports, "__esModule", { value: true });
let users;
class UserDocument {
    static loadClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (users)
                    return;
                users = yield client.db(process.env.MONGO_DB).collection("users");
            }
            catch (error) {
                return error;
            }
        });
    }
    static insertUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users.insertOne(user);
            }
            catch (error) {
                return error;
            }
        });
    }
    static findUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users.findOne(user);
            }
            catch (error) {
                return error;
            }
        });
    }
    static findSome(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users.find(user).toArray();
            }
            catch (error) {
                return error;
            }
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield users.find().toArray();
                return list;
            }
            catch (error) {
                return error;
            }
        });
    }
    static deleteUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users.deleteOne(user);
            }
            catch (error) {
                return error;
            }
        });
    }
    static deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users.deleteMany({});
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = UserDocument;
//# sourceMappingURL=users.js.map