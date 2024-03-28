import mongoose from 'mongoose';

import jwt from 'jsonwebtoken'

const cookieOptions =  {
    maxAge:15 * 24 * 60 *  60 * 1000,
    httpOnly:true,
    sameSite:"none",
    secure:true
}

const connectDB = async(uri) => {
    try {
        await mongoose.connect(uri, {dbName:"ChatU"});
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log("Error:");
        throw error;
    }
};

const sendToken =(res, user, code, message)=>{
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);


    return res.status(code).cookie("chattu-token",token,cookieOptions).json({
        success:true,
        message,
    })
};

const emitEvent = (req, event,users, data) =>{
    console.log("Emmiting Event");
}

export {connectDB, sendToken, cookieOptions, emitEvent};