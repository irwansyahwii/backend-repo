"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../core/app");
app_1.app.get('/fetch-user-data', (req, res) => {
    res.send('Express + TypeScript Server');
});
console.log("A");
app_1.app.post('/update-user-data', (req, res) => {
    res.send('Express + TypeScript Server');
});
