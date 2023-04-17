import bcrypt from "bcrypt" //crypt our passwd
import jwt from "jsonwebtoken"
import User from "../models/User.js"

// register user
export const register=async(req,res)=>{
    try{
        const {firstName,lastName,email,password,picturePath,friends,location,occupation}=req.body;
        const salt=await bcrypt.genSalt(10);
        const passwdHash=await bcrypt.hash(password,salt);
        //so we give the user a jwt only when brcypt passwd matches
        const newUser=new User({
            firstName,
            lastName,
            email,
            password:passwdHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile:Math.floor(Math.random()*10000),//randomly generated
            impressions:Math.floor(Math.random()*10000),
        });
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);    
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};
// logging in
export const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email:email});
        if(!user){
            res.status(400).json({msg:"User does not exists"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg:"Passwords don't match"});
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET)//secret string written in env file
        delete user.password;
        res.status(200).json({token,user});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }

}
//now on authentication we need to work on authorization to make them hit front end endpoints