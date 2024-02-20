const { Router, response } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    username: username,
    password: password,
  }).then(() => {
    res.json({
      msg: "Admin Created Successfully",
    });
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
  });
  res.json({
    msg: "Course created Successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  //   const allCourses = Course.find({})
  //   .then((response) => {
  //     res.json({
  //       courses: response,
  //     });
  //   });
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
