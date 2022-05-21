//create router to handle user api reqs
const exp = require("express");
const contactusApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

//to extract body of request object
contactusApp.use(exp.json());

//USER API Routes

//create a route to 'contact Us'
contactusApp.post(
  "/send",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let contactusCollectionObject = request.app.get("contactusCollectionObject");
    //get userObj from client
    let newContactusObj = request.body;
    await contactusCollectionObject.insertOne(newContactusObj);
    //send response
    response.send({ message: "Message sent" });
    })
);

module.exports = contactusApp;

