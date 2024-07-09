import { CurrentUser } from "../entities/currentUser";
import { User } from "../entities/user";
import { UserRepo } from "../repository/userRepo";



export class FetchUserDataController {
  public async getUserData(uid: string, currentUser: CurrentUser): Promise<User | null>{
    
    const repo = new UserRepo();
    let userData = await repo.getUserData(uid);

    if(!userData){
      userData = new User(currentUser.uid, currentUser.name, "", "", currentUser.email);
    }

    return Promise.resolve(userData);
  }
}