import express from 'express';
export const register =async (req: express.Request, res: express.Response) => {
    try {
        res.send("hello")
       
    }
    catch (err) {
        res.send("error")
    }
    
}
 


