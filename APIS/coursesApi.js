//create router to handle user api reqs
const exp = require("express");
const coursesApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

//configure cloudinary
cloudinary.config({
  cloud_name: "dwaz5sqxa",
  api_key: "728315744387884",
  api_secret: "HfBQkAfw3rfhJ1ChOV4gV2qbbuM",
  secure: true,
});

//config cloudinary storage
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "fep",
      public_id: file.fieldname + "-" + Date.now(),
    };
  },
});

//configure multer
var upload = multer({ storage: cloudinaryStorage });


//to extract body of request object
coursesApp.use(exp.json());
coursesApp.use(exp.urlencoded({extended:true}));

//USER API Routes

//create route to handle '/courses' path
coursesApp.get(
  "/courses",
  expressAsyncHandler(async (request, response) => {
    //get coursesCollectionObject
    let coursesCollectionObject = request.app.get("coursesCollectionObject");
    //get all courses
    let courses = await coursesCollectionObject.find().toArray();
    //send res
    response.send({ message: "courses list", payload: courses });
  })
);

//create a route to 'post course'
coursesApp.post(
  "/postcourse",
  upload.single("photo"),
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let coursesCollectionObject = request.app.get("coursesCollectionObject");
    //get userObj from client
    let newCourseObj = JSON.parse(request.body.obj);
    newCourseObj.tnumbnail=request.file.path;
    await coursesCollectionObject.insertOne(newCourseObj);
    //send response
    response.send({ message: "Created" });
    })
);

  //export coursesApp
module.exports = coursesApp;
