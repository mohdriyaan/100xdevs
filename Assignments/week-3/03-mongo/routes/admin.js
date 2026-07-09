const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    
    Admin.findOne({
        username : username,
        password : password
    })
    .then((value)=>{
        if(value){
            return res.status(400).json({
                msg : "User already exists"
            })
        }else{
            Admin.create({
                username : username,
                password : password
            })
            .then(()=>{
                return res.status(200).json({
                    message : "Admin created successfully" 
                })
            })
            .catch((err)=>{
                return res.status(500).json({
                    message : err
                })
            })
        }
    })   
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    try{
        const title = req.body.title
        const description = req.body.description
        const imageLink = req.body.imageLink
        const price = req.body.price
        const newCourse = await Course.create({
            title,
            description,
            imageLink,
            price
        })
        return res.status(200).json({
            message : "Course created successfully" , 
            courseId : newCourse._id
        })
    }catch(err){
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try{
        const allCourses = await Course.find({})
        return res.status(200).json({
            allCourses
        })
    }catch(err){
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
});

module.exports = router;