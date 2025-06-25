import app from './app.js';
import connectDB from './configs/database.js';
const PORT = process.env.PORT || 3000;

const startServer = async () =>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server start at port ${PORT}`);
        })
    }catch(error){
        console.error("Server start failed");
        throw error;
    }
}

startServer();