"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnect = async (app) => {
    const mongo_uri = process.env.MONGO_URI;
    try {
        await mongoose_1.default.connect(mongo_uri);
        console.log("connection established!");
        app.listen(4000, () => {
            console.log("http://localhost:4000");
        });
    }
    catch (error) {
        console.log(error);
        console.log("error connecting to database");
    }
};
exports.dbConnect = dbConnect;
