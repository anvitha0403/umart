import express from "express"
import httpStatus from "http-status";
import { ApiError } from "../config/error";
import User from "../model/User";
import  authService from "../services/auth.services"

export const getProfile = async (req: express.Request, res: express.Response, next: express.NextFunction) => { 
    try {
        const user = req.body.user;
        if (user == null) {
            throw new ApiError(httpStatus.UNAUTHORIZED, "not authorized");
        }
        res.status(200).json(user)
    }
    catch (err) {
        
        next(err)
    }

}
export const updateProfile = async (req: express.Request, res: express.Response, next: express.NextFunction) => { 
    try {
        const user = req.body.user;
        const data = req.body.data;
        console.log(user)
        console.log(data)
        if (user == null) {
            throw new ApiError(httpStatus.UNAUTHORIZED, "not authorized");
        }

        const user1 = await User.findByIdAndUpdate({ _id: user._id }, {
            
            $set: {
                ...data
            }
        },
            {new:true})
        if (user1 == null) {
             throw new ApiError(httpStatus.UNAUTHORIZED, "not authorized");
        }
        else {
            
        console.log(user1)
        res.status(200).json(user1)
            
        }

    }
    catch (err) {
        
        next(err)
    }

}
export const updateEmail = async (req: express.Request, res: express.Response, next: express.NextFunction) => { 
    const user = req.body.user
    const data = req.body.data;
    const user1 = await User.findByIdAndUpdate({ _id: user._id }, {
        
            $set: {
                ...data
            }
        
    },{new:true})
     const token= await authService.generateAuthToken(user1);
            
           
            
            res.cookie('token',token).json({user1,token})

}