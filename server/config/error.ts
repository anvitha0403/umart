import mongoose from 'mongoose';
import httpStatus from 'http-status';
import express from 'express'

export class ApiError extends Error {
    statusCode: number;

    constructor(statusCode:number,message:string){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }   
}

export const handleError = (err:ApiError,res:express.Response) => {
    const { statusCode,message } = err;
    res.json({
        status:'error',
        statusCode,
        message
    });
}
