
import { User } from "../entities/user";
import { ApiError } from "../entities/apiError";
import { firestore } from "../core/app";

const USERS_COLLECTION = "Users";
const db = firestore;

export class UserRepo {
  public async getUserData(uid: string): Promise<User | null>{
    try {
      const docSnap = await db.collection(USERS_COLLECTION).doc(uid).get();
      

      if(docSnap.exists){
        const data = docSnap.data() || {};

        const user = new User(data.id, data.firstName, data.lastName, data.role, data.email);

        return user;
      }

            
    } catch (error: any) {
      const errorMessage = error + ""
      if(errorMessage.startsWith("Error: Could not load the default credentials")){
        throw new ApiError("LOGIN_REQUIRED");
      }
    }

    return null;
    
  }
}