const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
// const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

mongoose
//   .connect('mongodb+srv://sayakbasakhack:8mawWMCqVQWiAPR1@cluster0.5qm7pft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .connect('mongodb+srv://sayakbasakhack:8mawWMCqVQWiAPR1@cluster0.5qm7pft.mongodb.net/')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error Connecting to MongoDB"+err);
  });

app.listen(port, () => {
  console.log("server is running on Port "+port);
});

const User = require("./models/User");
// const Post = require("./models/postModel");

//register
app.post("/register", async (req, res) => {
  try {
    const { email,  password } = req.body;
    console.log(req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser)   {
      return res.status(400).json({ message: "Email already registered" });
    }

    //create a new user
    const newUser = new User({  email,  password });

    //generate and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the  user to the database
    await newUser.save();

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "error registering user" });
  }
});


// //verify token
// app.get("/verify/:token", async (req, res) => {
//   try {
//     const token = req.params.token;

//     const user = await User.findOne({ verificationToken: token });
//     if (!user) {
//       return res.status(404).json({ message: "Invalid token" });
//     }

//     user.verified = true;
//     user.verificationToken = undefined;
//     await user.save();

//     res.status(200).json({ message: "Email verified successfully" });
//   } catch (error) {
//     console.log("error getting token", error);
//     res.status(500).json({ message: "Email verification failed" });
//   }
// });

//generate key

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

//login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body);
    const user = await User.findOne({ email });
    // console.log(user?.password ," ",password);
    if (!user) {
      return res.status(404).json({ message: "Invalid username" });
    }

    if (user?.password !== password) {
      return res.status(404).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);


    res.status(200).json({ token:token, userId:user._id });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

//all users
app.get("/user/:userId", (req, res) => {
  try {
    const loggedInUserId = req.params.userId;

    User.find({ _id: { $ne: loggedInUserId } })
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => {
        console.log("Error: ", error);
        res.status(500).json("errror");
      });
  } catch (error) {
    res.status(500).json({ message: "error getting the users" });
  }
});


//create a new post
// app.post("/create-post", async (req, res) => {
//   try {
//     const { content, userId } = req.body;

//     const newPostData = {
//       user: userId,
//     };

//     if (content) {
//       newPostData.content = content;
//     }

//     const newPost = new Post(newPostData);

//     await newPost.save();

//     res.status(200).json({ message: "Post saved successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "post creation failed" });
//   }
// });




//all the posts
// app.get("/get-posts", async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate("user", "username")
//       .sort({ createdAt: -1 });

//     res.status(200).json(posts);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "An error occurred while getting the posts" });
//   }
// });

// profile
app.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error while getting the profile" });
  }
});

//current user
app.get("/curr/:userId", async (req, res) => {
  try {
    const loggedInUserId = req.params.userId;

    const user = await User.findOne({ _id: loggedInUserId });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "error getting the user" });
  }
});

//edit
// app.put("/edit/:userId", async (req, res) => {
//   console.log(req.params);

//   try {

//     const formData=req.body;
//     const task=await User.findByIdAndUpdate(req.params.userId,formData);
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(404).json({ error: "Error While Updating the Data...!"})
//   }
// })

//delete
// app.get("/delete/:userId", async (req, res) => {
//   console.log(req.params.userId);
//   try {

//     await User.deleteOne({_id:req.params.userId});
//     res.status(200).json({message: "delete"});
//   } catch (error) {
//     res.status(500).json({ message: "Error while getting the profile" });
//   }
// });


// mongo
// sayakbasakhack
// 8mawWMCqVQWiAPR1
