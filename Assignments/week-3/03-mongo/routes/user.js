const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    const userExists = await User.findOne({
        username : username,
        password : password
    })

    if(userExists){
        return res.status(400).json({
            message : "User already exits"
        })
    }else{
        await User.create({
            username,
            password
        })
        return res.status(200).json({
            message:"User created successfully"
        })
    }
});

router.get('/courses',userMiddleware, async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({})
    return res.status(200).json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    try{
        const username = req.headers.username
        const password = req.headers.password

        const courseId = req.params.courseId
        
        await User.findOneAndUpdate({
            username,
            password
        },{
            $push : {purchasedCourses : courseId}
        })

        return res.status(200).json({
            message : "Course purchased successfully"
        })
    }catch(err){
        return res.status(500).json({
            message : err
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username
    const password = req.headers.password
    const user = await User.findOne({
        username,
        password
    }).populate("purchasedCourses")
    
    return res.status(200).json({
        purchasedCourses : user.purchasedCourses
    })
});

module.exports = router