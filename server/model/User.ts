import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    email: {
        type: String,
      
        unique: true,
        trim: true,
      validate: {
            validator: function(v:string) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    }
    ,
    password: {
        type: String,
        required: true,
        
        
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default:'user'
    },
    firstName: {
        type: String,
        maxlength: 100,
        trim: true,
        default:""

    },

      lastName: {
        type: String,
        maxlength: 100,
        trim: true,
        default:""

    },
      
   
    history: {
        
        

    },
    verified: {},
      cart:[],
      
      


})
userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
     
userSchema.methods.comparePassword = function(candidatePassword:string, cb:any) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
userSchema.methods.generateAuthToken =async  function  (user1:any) {
    let user = this || user1;
    
    const userObj = { sub: user._id.toHexString() };
    console.log(userObj);
    const token = jwt.sign(userObj, `${process.env.DB_SECRET}`, { expiresIn: '1d' })
    console.log(token)
    return token;
}
userSchema.methods.generateRegisterToken =async  function  (user1:any) {
    let user = this || user1;
    
    const userObj = { sub: user._id.toHexString() };
    console.log(userObj);
    const token = jwt.sign(userObj, `${process.env.DB_SECRET}`, { expiresIn: '1h' })
    console.log(token)
    return token;
}
const user = model('User', userSchema)
export default user