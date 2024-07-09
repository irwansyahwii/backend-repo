import { userInfo } from "os";
import { ApiError } from "../entities/apiError";
import { CurrentUser } from "../entities/currentUser";
import { User } from "../entities/user";
import { UserInfo } from "../entities/userInfo";
import { UserRepo } from "../repository/userRepo";



export class UpdateUserDataController {
  public async updateUserData(userRaw: UserInfo): Promise<void>{
    
    const repo = new UserRepo();
    if(!userRaw){
      throw new ApiError("USER_IS_REQUIRED");
    }
    if(!userRaw.id){
      throw new ApiError("USER_ID_IS_REQUIRED");
    }
    //TODO: add remaining field validations

    // const user = new User(userRaw.id, userRaw.firstName, userRaw.lastName, userRaw.role, userRaw.email);
    await repo.updateUserData(userRaw);
    
  }
}