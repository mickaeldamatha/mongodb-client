"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
const users_1 = __importDefault(require("./users"));
exports.default = {
    Client: client_1.default,
    UserDocument: users_1.default,
};
//# sourceMappingURL=index.js.map