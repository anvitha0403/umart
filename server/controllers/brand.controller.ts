import {Brand} from "../model/Brand"
import express from "express"
import httpStatus from "http-status";
import { ApiError } from "../config/error";
export const newBrand =async (req:express.Request, res:express.Response, next:express.NextFunction) => {
    try {
        const { name } = req.body;
        const brand = new Brand({ name });
        await brand.save();
        res.status(200).json(brand);
    }
    catch (err) {
        next(err);
    }
    

}
export const getBrand =async (req:express.Request, res:express.Response, next:express.NextFunction) => {
    try {
        const id = req.params.id;
        const brand = await Brand.findById({ _id:id });
        if (brand == null) {
           throw new ApiError(httpStatus.NOT_FOUND, "brand not found")
       }
        res.status(200).json(brand);
    }
    catch (err) {
        next(err);
    }
    

}

export const getAllBrands =async (req:express.Request, res:express.Response, next:express.NextFunction) => {
    try {
        
        const brand = await Brand.find({});
        if (brand == null) {
           throw new ApiError(httpStatus.NOT_FOUND, "brands not found")
       }
        res.status(200).json(brand);
    }
    catch (err) {
        next(err);
    }
    

}
export const deleteBrand =async (req:express.Request, res:express.Response, next:express.NextFunction) => {
    try {
        const id = req.params.id;
        console.log(id)
        const brand = Brand.findByIdAndRemove({ _id: id }, { new: true }, (err:any) => {
            if (err) {
                new ApiError(httpStatus.NOT_FOUND, "not found not deleted");
            }
        });
       
        res.status(200).json({"msg":"deleted"});
    }
    catch (err) {
        next(err);
    }
    

}
