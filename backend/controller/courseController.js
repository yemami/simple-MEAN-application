
const courseModel = require('../model/course')

module.exports.getCourses = async(req,res,next)=>{
    try{
        const result = await courseModel.find({})  
        const data={
            message: "all courses retrived successfully"
        } 
        res.json({result,data})
    }catch(error){
        next(error)
    }
    
}

module.exports.createCourse= async(req,res,next)=>{
    try {
        const course = req.body;
        const result = await courseModel.create(course)
        //const result2 = await courseModel.save(course)
        
        const data = {
            message:"course created successfully"
        }  
        res.json({result,data})      
    } catch (error) {
        next(error)
    }
}

module.exports.updateCourse= async(req,res,next)=>{
    try {
        const course_id = req.params.course_id
        const updatedCourse = req.body
        const result = await courseModel.updateOne({_id:course_id},{...updatedCourse})
        const data= {
            message:"updated successfully"
        }
        res.json({result,data})
    } catch (error) {
        next(error)
    }
}

module.exports.deleteCourse = async(req,res,next)=>{
    try {
        const course_id= req.params.course_id
        const result = await courseModel.deleteOne({_id:course_id})
        const data = {
            message:"deleted successfully"
        }
        res.json({result,data})
        
    } catch (error) {
        next(error)
    }
}