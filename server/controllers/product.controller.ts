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
    // const data = req.body.data;
    // console.log(data)
   
 
    // const product =await Product.insertMany(data);
   const product= await Product.find({});
    // product.map((m:any) => {
    //   const priceup = m.price * 77.60;
    //   console.log(priceup)
    //    Product.findByIdAndUpdate({_id:[m._id]},{price:[priceup]},{new:true})
    // })
  
     
  
    //...an array filled with values



    const doSomethingAsync = async (m: any) => {
    const priceup =Math.round(m.price * 100) / 100
     console.log(priceup)
  return await Product.findByIdAndUpdate({_id:m._id},{price:priceup},{new:true})
    // })
}

const getData = async () => {
  return Promise.all(product.map((m:any )=> doSomethingAsync(m)))
}

getData().then(data => {
  console.log(data)
})
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

export const getFilter = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const category = String(req.query.category).split('-');
console.log(req.query.category)
    const min =  parseInt( String(req.query.min));
    const max =  parseInt( String(req.query.max));
    const sort = parseInt( String(req.query.sort));
    const limit = parseInt( String(req.query.limit));

    console.log(`${min} ${max} ${sort} ${limit} ${category}`);
  
    console.log(category)
   


    console.log("reACHED SERVER")
    var Prod;
    if (category[0]=='') {
        Prod = await Product.find({   "price": { $gte: min , $lte: max}  }).sort({ price:sort });
    }
    else {
       Prod = await Product.find({ "category": { $in: category } ,  "price": { $gte: min , $lte: max}  }).sort({ price:sort });
      
    }
    
    const total = Prod.length;
    const pages = Math.ceil(total / limit);
    const page =parseInt(String(req.query.page));
    
   

    if (Prod == null||page < 0 && page > pages - 1) {
      throw new ApiError(httpStatus.NOT_FOUND, "Products not found");
    }
    console.log(page)
    const prod = Prod.slice((page - 1) * limit, (page - 1) * limit + limit)
    console.log()
    const result = {
      products:prod ,
      total,
      pages,
      prevPage: page > 1,
      nextPage: page < pages,
      

    }
    
    console.log(result)
    res.status(200).json(result);
    
  } catch (err) {
    next(err);
  }
};
