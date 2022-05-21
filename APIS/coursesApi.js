//create router to handle user api reqs
const exp = require("express");
const coursesApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

//to extract body of request object
coursesApp.use(exp.json());

//USER API Routes

//create route to handle '/courses' path
coursesApp.get(
  "/courses",
  expressAsyncHandler(async (request, response) => {
    //get coursesCollectionObject
    let studentCollectionObject = request.app.get("coursesCollectionObject");
    //get all courses
    let student = await studentCollectionObject.find().toArray();
    //send res
    response.send({ message: "courses list", payload: student });
  })
);

//create a route to 'post course'
coursesApp.post(
  "/postcourse",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let coursesCollectionObject = request.app.get("coursesCollectionObject");
    //get userObj from client
    let newCourseObj = request.body;
    await coursesCollectionObject.insertOne(newCourseObj);
    //send response
    response.send({ message: "Created" });
    })
);

  //export coursesApp
module.exports = coursesApp;
