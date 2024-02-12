
import dbConnect from "../../../config/dbConnect";
import bcrypt from "bcryptjs"
import User from "../../../models/user";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  session:{
    strategy:"jwt",
  },
  providers: [
    CredentialsProvider({
        name:"credentials",
        // credentials:{},
        async authorize(credentials,req){
          const { email, password } = credentials;  
          try {
            await dbConnect();
            const user = await User.findOne({email}).select("password");
            // console.log(user)

            if(!user){
              return null
            }

            const passwordMatch =await bcrypt.compare(password,user.password);
            if(!passwordMatch){
              return null
            }  

            return user; 
          } catch (error) {
            console.log(error)            
          }               
        },
    }),
    
  ],
  secret:process.env.NEXTAUTH_SECRET,
  // if want to use your custom login page
  pages: {
    signIn: "/login",
  },
 }
const  handler = NextAuth(authOptions)

export { handler as GET, handler as POST }