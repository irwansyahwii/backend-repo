import {app} from '../core/app';

app.get('/fetch-user-data', (req, res) => {
  res.send('Express + TypeScript Server hello');
});

console.log("A")

app.post('/update-user-data', (req, res) => {
  res.send('Express + TypeScript Server');
});
