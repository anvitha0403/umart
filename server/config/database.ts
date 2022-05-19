import mongoose from 'mongoose'
import 'dotenv/config'


async function database () {
     
   await mongoose.connect(`${process.env.MONGO_URL}`, (err) => {

        console.log("database connected")
   })
    
}
export default database
