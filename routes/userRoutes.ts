import { FetchUserDataController } from '../controller/fetchUserDataController';
import {app} from '../core/app';

app.get('/fetch-user-data', async (req: any, res) => {
  try {
    const controller = new FetchUserDataController();
    const userId = req.currentUser.uid || "";
    const userData = await controller.getUserData(userId, req.currentUser);
    
    res.json(userData)
    
    
  } catch (error) {
    res.json({error: error + ""});    
  }
});

app.post('/update-user-data', (req, res) => {
  res.send('Express + TypeScript Server');
});
