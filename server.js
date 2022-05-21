//create express app
const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;
const path=require('path');

//connect build with nodejs
app.use(exp.static(path.join(__dirname,'./build')))

//DB connection URL
const DBurl="mongodb+srv://rinku:Rinku%402002@cluster0.u9rsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//connect with mongoDB server
mclient.connect(DBurl)
.then((client)=>{

  //get DB object
  let dbObj=client.db("FE");

  //create collection objects
  let userCollectionObject=dbObj.collection("users");
  let coursesCollectionObject=dbObj.collection("courses");
  let contactusCollectionObject=dbObj.collection("contactus");

  //sharing collection objects to APIs
  app.set("userCollectionObject",userCollectionObject);
  app.set("coursesCollectionObject",coursesCollectionObject);
  app.set("contactusCollectionObject",contactusCollectionObject);

  console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))

//import userApp and studentApp
const userApp = require("./APIS/userApi");
const coursesApp=require("./APIS/coursesApi");
const contactusApp=require("./APIS/contactusApi");

//excute specific middleware based on path
app.use("/user-api", userApp);
app.use("/courses-api", coursesApp);
app.use("/contactus-api", contactusApp);

//dealing with page refresh
app.use('*', (request, response)=>{
  response.sendFile(path.join(__dirname, './build/index.html'))
})

//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

//error handling middleware
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

//assign port number
app.listen(4000, () => console.log("server listening on port 4000.."));

