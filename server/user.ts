"use server"
import { auth } from "@/lib/auth"; // path to your Better Auth server instance

export const signIn = async (email:string,password:string) => {
    try {
        const response = await auth.api.signInEmail({
            body: {
                email,
                password
            },
        });
        return {
            success:true,
            message:"Signed in successfully"
        }
    } catch (error) {
        const e =error as Error
        return {
            success:false,
            message:`Try again later ${e.message}`
        }
    }
}
export const signUp = async (email:string,password:string,name:string) => {
    try {        
        const response = await auth.api.signUpEmail({
            body: {email,password,name},
        });
          return {
            success:true,
            message:"SignUp in successfully"
        }
    } catch (error) {
       const e =error as Error
        return {
            success:false,
            message:`Try again later ${e.message}`
        }
    }
}

//  email: "ravivarma@gmail.com",
//                 password: "4518451dodsbno484",
//                 name: "ravi"