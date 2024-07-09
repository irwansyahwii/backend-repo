
import { User } from "../entities/user";
import { ApiError } from "../entities/apiError";
import { firestore } from "../core/app";
import { getFirestore } from "firebase-admin/firestore";
import { UserInfo } from "../entities/userInfo";


const USERS_COLLECTION = "Users";
const db = getFirestore();

export class UserRepo {
  public async updateUserData(user: UserInfo): Promise<void>{
    try {
      console.log("Updating user data, user:", user);
      // const response = await db.collection(USERS_COLLECTION).add(user);
      
      
      const response = await db.collection(USERS_COLLECTION).doc(user.id).set(user);
      console.log("response:", response)

    } catch (error: any) {
      const errorMessage = error + ""
      console.log(errorMessage);
      if(errorMessage.startsWith("Error: Could not load the default credentials")){
        throw new ApiError("LOGIN_REQUIRED");
      }
    }
    
  }    
  
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