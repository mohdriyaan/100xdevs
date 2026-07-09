const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwtSign = require("../Authentication/sign.js")

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({
        username,
        password
    })

    if(user){
        return res.status(403).json({
            message : "User already exists"
        }) 
    }else{
        await User.create({
            username,
            password
        })
        return res.status(200).json({
            message : "User created successfully"
        })
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({
        username,
        password
    })

    if(!user){
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

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({})
    return res.status(200).json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const data = req.user

    try {
        await User.findOneAndUpdate(data,
            {$push : {purchasedCourses : courseId}}
        )
        return res.status(200).json({
          message: 'Course purchased successfully'  
        })
    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const data = req.user
    const user = await User.findOne(data).populate("purchasedCourses")

    return res.status(200).json({
        purchasedCourses : user.purchasedCourses
    })
});

module.exports = router