import User from '../../model/User';
require('dotenv').config();

import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const jwtOptions = {
    secretOrKey: process.env.DB_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const jwtVerify = async(payload:any, done:any) => {
    try {
        
        const user = await User.findById(payload.sub);
        if (!user) {
            
            return done(null, false)
        }
        done(null,user)
    }catch(error){
        done(error,false)
    }
}


const jwtStrategy = new JwtStrategy(jwtOptions,jwtVerify)

module.exports = {
    jwtStrategy
}