const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')
const path = require('path')

dotenv.config()

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
    console.log("MongoDB connected!")
}).catch(err => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename:(req,file,cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).end("File has been uploaded!")
})

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute); 
app.use("/api/auth", authRoute);  
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(8000, () => {
    console.log("Backend is running!")
})