import { FetchUserDataController } from '../controller/fetchUserDataController';
import { UpdateUserDataController } from '../controller/updateUserDataController';
import {app} from '../core/app';

app.get('/fetch-user-data', async (req: any, res) => {
  try {
    const controller = new FetchUserDataController();
    const userId = req.currentUser.uid || "";
    const userData = await controller.getUserData(userId, req.currentUser);
    
    res.json(userData)
    
    
  } catch (error) {
    res.status(400).json({error: error + ""});    
  }
});

app.post('/update-user-data', async (req, res) => {
  try {
    console.log("/update-user-data, body:", req.body);
    const controller = new UpdateUserDataController();
    
    await controller.updateUserData(req.body);        

    res.json({ok:true});
    
  } catch (error) {
    res.status(400).json({error: error + ""});    
  }
});
