import express from 'express';
import httpStatus from 'http-status';
import { ApiError } from '../config/error'

import User from "../model/User"
import authService from "../services/auth.services"
import registerEmail from '../services/email.services';
export const register =async (req: express.Request, res: express.Response,next: express.NextFunction) => {
    try {
    
        const { email, password } = req.body;
        if (await authService.findUser(email) != null) {
            throw new ApiError(httpStatus.BAD_REQUEST, "user already taken");
           
        }
        else {
            const user = await authService.createUser(email, password);
            const token = await authService.generateAuthToken(user);
            await registerEmail(email,user);
            
           
            
            res.cookie('token',token).json({user,token})
        }

       
    }
    catch (err) {
     
        next( err);
    }
    
}
 
export const signin = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await authService.findUser(email);
        if (user == null) {
            throw new ApiError(httpStatus.NOT_FOUND, "user not found");
        }
        else {
             authService.comparePassword(password,user, async function (err:any, isMatch:boolean) {
                console.log("isMatch", isMatch);
                if (err) next(err);

                if (!isMatch) {
                    next( new ApiError(httpStatus.BAD_REQUEST, "wrong password"));
                    
                }
                //  didnt work the normal try catch
                else {
                      const token= await authService.generateAuthToken(user);
            
           
            
            res.cookie('token',token).json({user,token})
                 }

                //user is authenticated
                //session length
              
            });
        }

    }



    catch (err) {
      
        next(err)
    }

    
}


