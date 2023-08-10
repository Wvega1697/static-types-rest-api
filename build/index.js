"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware que transforma la req. body a un json
// This line is important to ensure your app listens to the PORT env var
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
app.get('/ping', (_req, res) => {
    console.log('someone ping here!! On date: ' + new Date().toLocaleDateString());
    res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
