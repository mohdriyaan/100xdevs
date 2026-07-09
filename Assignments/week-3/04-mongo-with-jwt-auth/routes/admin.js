const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();
const {jwtSign} = require("../Authentication/sign.js") 

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const admin = await Admin.findOne({
        username,
        password
    })
    
    if(admin){
        return res.status(400).json({
            message : "Admin already exists"
        })
    }else{
        await Admin.create({
            username,
            password
        })
        return res.status(200).json({
            message: 'Admin created successfully'
        })
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const admin = await Admin.findOne({
        username,
        password
    })

    if(!admin){
        return res.status(403).json({
            message : "User does not exist"
        })
    }else{
        const token = jwtSign({
            username,
            password
        })
        return res.status(200).json({
            token
        })
    }

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
            message: 'Course created successfully', 
            courseId: newCourse._id
        })
    }catch(err){
        res.status(500),json({
            message : err
        })
    }        
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({})
    res.status(200).json({
        courses
    })
});

module.exports = router;