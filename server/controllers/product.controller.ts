import { Product } from "../model/Product";
import { Brand } from "../model/Brand";
import express from "express";
import httpStatus from "http-status";
import { ApiError } from "../config/error";
export const newProduct = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const data = req.body;
    const cate = req.body.category;
    console.log(cate)
    const category = await Brand.findOne({ name: cate });
     console.log(category);
    data.category = category._id;
   
    const product = new Product(data);
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const allnewProduct = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const data = req.body.data;
    console.log(data)
   
 
    const product =await Product.insertMany(data);
  
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
export const getProduct = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const id = req.params.id;
    const prod = await Product.findById({ _id: id });
    if (prod == null) {
      throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
    }
    res.status(200).json(prod);
  } catch (err) {
    next(err);
  }
};

export const getAllProducts = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    var { sortBy, order, limit } = req.query;
    order = String(order)
    sortBy=String(sortBy)
    
    var search = {
      [sortBy]:  parseInt(order)
    }
   
    console.log(search)

    console.log("reACHED SERVER")
    const Prod = await Product.find({}).limit(limit).sort(search);
    if (Prod == null) {
      throw new ApiError(httpStatus.NOT_FOUND, "Products not found");
    }
    res.status(200).json(Prod);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const id = req.params.id;
    console.log(id);
  
    const prod =await Product.findByIdAndRemove(
      { _id: id },
      { new: true },
      (err: any) => {
        if (err) {
          new ApiError(httpStatus.NOT_FOUND, "not found not deleted");
        }
      }
    );

    res.status(200).json({ msg: "deleted" });
  } catch (err) {
    next(err);
  }
};
