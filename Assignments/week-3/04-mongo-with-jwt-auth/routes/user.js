const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;

  User.create({
    username,
    password,
  });

  res.json({
    msg: "User Created Successfully",
  });
});

router.post("signin", async (req, res) => {
  // Implement admin signin logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({ token });
  } else
    res.status(411).json({
      msg: "Incorrect Email or Password",
    });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const couseId = req.params.courseId;
  const username = req.username;

  try {
    await User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: new mongoose.Types.ObjectId(couseId),
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
  res.json({
    msg: "Purchase Complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });
  //   log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
