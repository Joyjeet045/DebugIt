import mongoose from "mongoose";
const postSchema=mongoose.Schema(
    {
        userId:{
            type:String,
            // required:true,
        },
        firstName:{
            type:String,
            // required:true,
        },
        lastName:{
            type:String,
            // required:true,
        },
        location:String,
        description:String,
        picturePath:String,
        userPicturePath:String,
        likes:{
            type:Map,
            of:Boolean,//likes it or not
        },
        //we create a map as in an array to find a specific user we hv to loop over
        comments:{
            type:Array,
            default:[]
        },
        
    },
    {timestamps:true}
)
const Post=mongoose.model("Post",postSchema);
export default Post