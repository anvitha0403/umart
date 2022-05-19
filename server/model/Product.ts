const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    title:{
        required:[true,'you need a title'],
        type:String,
        unique:1,
        maxlength:250
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required:true
    },
    
    description:{
        required:[true,'Ypu need a description'],
        type:String,
        maxlength:10000
    },
    price:{
        required:true,
        type: Number,
        maxlength:255
    },
    rating:{
    type: Object,
        
    },
    
    shipping:{
        type:Boolean,
        required:[true,'Specify if this product has free shipping'],
        default:false
    },
    images:{
        type:Array,
        default:[]
    },
    date:{
        type:Date,
        default: Date.now
    }
});

export const Product = mongoose.model('Product',productSchema);
