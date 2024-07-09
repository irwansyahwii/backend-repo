import { app } from "./core/app";
import './routes/userRoutes';



const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});