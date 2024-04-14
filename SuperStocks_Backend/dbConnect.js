const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config('./.env');

module.exports=async()=>{
    const mongoUri=process.env.MONGO_URL;
    try{
        const connect=await mongoose.connect(mongoUri);
        console.log('MongoDB Connected: '+connect.connection.host);
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}