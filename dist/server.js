"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/users', users_1.default);
app.use('/', (_, res) => {
    res.status(200).send('success');
});
(0, db_1.default)().then(() => app.listen(3000, () => console.log('user-task is alive')));
