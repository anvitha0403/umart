import passport from 'passport';
import { ApiError } from '../error';
import httpStatus from 'http-status';

import express from 'express';

const verify = (role: string[], req: express.Request, res: express.Response, resolve: any, reject: any) => async (err: any, user:any) => {
    var author = false;
    if (user) {

        role.map(m => {
            if (m == user.role) {
                author = true;
            }
            
        })
    }
    if( err || !user||!author){
       return reject(new ApiError(httpStatus.UNAUTHORIZED,'Sorry, unauthorized'))
    }

    ///// 


    

    req.body.user = user;
    resolve()
}


export const auth = (role: string[]) => async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body)
    return new Promise((resolve, reject)=>{
        passport.authenticate('jwt',{ session:false}, verify( role,req, res, resolve, reject))(req,res,next)
    })
    .then(()=> next())
    .catch((err)=> next(err))
}

