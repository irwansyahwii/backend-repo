"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./core/app");
require("./routes/userRoutes");
const port = process.env.PORT || 8000;
app_1.app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app_1.app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
