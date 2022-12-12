import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../images/loading.gif";

function CreateCourse() {
    let navigate=useNavigate();
    let [name,setname]=useState("");
    let [img,setimg]=useState(null);
    let [desc,setdesc]=useState("");
    let [cd,setcd]=useState([{
        name:"",
        link:""
    }]);
    let nameerr="",imgerr="",descerr="",cderr="";
    let [check,setCheck]=useState(false);
    function setName(e){
        setname(e.target.value);
    }
    function setImg(e){
        setimg(e.target.files[0]);
    }
    function setDesc(e){
        setdesc(e.target.value)
    }
    function setcdi(event,i){
        cd[i].name=event.target.value;
        setcd([...cd])
    }
    function setcdl(event,i){
        cd[i].link=event.target.value;
        setcd([...cd])
    }
    function handleSubmit(event){
        if(name==""){
            nameerr="*Name is required!";
            console.log(nameerr)
            setcd([...cd]);
            return;
        }
        else{
            nameerr="";
            if(img==null){
                imgerr="*Image is required!";
                return
            }
            else{
                imgerr="";
                if(desc==""){
                    descerr="*Description is required!";
                    return
                }
                else{
                    descerr="";
                    if(cd[0].name==""){
                        cderr="*This field is required!";
                        return
                    }
                    else{
                        cderr=""
                    }
                }
            }
        }
        let obj={name:name,description:desc,sources:cd}
        //create FormData object
        let formData = new FormData();
        //append values to it
        formData.append("obj", JSON.stringify(obj));
        formData.append("photo", img);
        //http post req
        console.log(formData)
        alert("Stop!")
        // setCheck(true);
        // axios
        // .post("/courses-api/postcourse", formData)
        // .then((response) => {
        //     setCheck(false);
        //     alert(response.data.message);
        //     navigate("/createcourse")
        // })
        // .catch((error) => {
        //     setCheck(false);
        //     alert("Something went wrong in creating user");
        // });
    }
    return(
        <>
        {check?<div>
        <div className="w-100 bg-white h100 d-flex align-items-center">
            <img className="loading d-block mx-auto my-auto" src={Loading} />
        </div>
        </div>:
        <div className="bg-dark p-5 m-5 rounded rounded-6">
            <h1 className="text-success fw-bolder ">Enter course details:</h1>
            <form className="mx-1 mx-md-4 mb-4" onSubmit={handleSubmit}>

                <br/>
                <div className="form-floating">
                    <input className="d-block mx-auto input form-control" id="name" placeholder='name' value={name} type="text" onChange={setName} />
                    <label>Name of the course</label>
                </div>
                <p className="text-danger">{nameerr}</p>

                <br/>
                <label className="form-label fw-bolder h3 text-light" htmlFor="img">Thumbnail</label><br/>
                <input className="text-light" id="img" type="file" onChange={setImg} />
                <p className="text-danger">{imgerr}</p>

                <br/><br/>
                <div className="form-floating">
                    <input className="d-block mx-auto input form-control" id="desc" placeholder='Description' value={desc} type="text" onChange={setDesc} />
                    <label htmlFor="desc">Description</label>
                </div>
                <p className="text-danger">{descerr}</p>
                
                <br/>
                {
                cd.map((ele,i)=>
                    <div key={i} className="border p-3 m-3">
                        <h4 className="text-secondary">{`Topic number: ${i+1}`}</h4>
                        <input className="d-block mx-auto input form-control" id="name" placeholder='Title' value={cd[i].name} type="text" onChange={(event)=>{
                            setcdi(event,i)
                        }} /><br/>
                        <input className="d-block mx-auto input form-control" value={cd[i].link} placeholder="Link" onChange={(event)=>{
                            setcdl(event,i)
                        }}/><br/>
                    </div>
                )
                }
                <p className="text-danger">{cderr}</p>
                <button className="btn btn-warning w-50 d-block mx-auto mt-4" type="button" onClick={()=>{
                    setcd([...cd,{
                        name:"",
                        link:""
                    }])
                }}>+</button>
                <br/>
                <button className="btn btn-primary d-block mx-auto w-25" type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        }
        </>
    );
}

export default CreateCourse;