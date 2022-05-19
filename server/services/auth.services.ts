import express from 'express';
import User from '../model/User'
import bcrypt from "bcrypt"

import { ApiError } from '../config/error';
 const createUser = async (email: string, password: string) => {
     try {
         console.log(email);
         console.log("dfdfdfdfdf")
         console.log(password);
         const user = new User({ email, password });
        await user.save();
     
        return user;
        
    }
    catch {
        
    }
}
const findUser = async (email :string) => {
    console.log(email)
    const obj = {email:""};
    obj.email = email;
    const user = await User.findOne(obj );
    console.log(user)
    return user;
} 
const generateAuthToken = async (user: any) => {
    const token = await user.generateAuthToken(user);
    return token;
    
}

const comparePassword = async function (candidatePassword: string, user:any, cb: any) {
   
        await bcrypt.compare(candidatePassword, user.password, function (err, isMatch) {
            if (err) return cb(err);
             return cb(null, isMatch);
            
        });
    
    
};

const e = {
    createUser,
    findUser,
    generateAuthToken,
    comparePassword,
}

export default  e;