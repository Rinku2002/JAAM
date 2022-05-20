import {Routes,Route, Link } from 'react-router-dom';
import logo from '../images/logo.Bi8fo6';
import { useForm } from 'react-hook-form';
import {axios} from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {addinfo} from '../slices/userinfoSlice'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import usersvg from '../svg icons/usersvg.svg'

function Login() {
  let [check,changecheck]=useState(false);
  let navigate=useNavigate();
  const dispatch=useDispatch()
  const {register,handleSubmit,formState:{errors}}=useForm()
  let ui=useSelector(state=>state.ui)
  const submit=async (data)=>{
      const axios = require('axios');
      const d =await axios.get("http://localhost:5000/users");
      let dd=d.data;
      for(let i=0;i<dd.length;i++){
        if(dd[i].email==data.email && dd[i].password==data.password){
          changecheck(true)
          console.log(dd[i])
          console.log("success")
          let actionObj=addinfo({...dd[i],s:true})
          dispatch(actionObj)
          console.log("action",actionObj)
          navigate("/courses")
          break;
        }
      }
      changecheck(true)
  }
    return(
        <>
            {ui.length==0 ? 
            <div className='container'>
            <section className="vh-100" >
            <div className="container py-5 h-100 rounded rounded-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10 col-sm-12">
            <div className="card mb-4" >
            <div className="row g-0 align-items-center ">
              
            <div className="col-md-6 col-lg-5 d-none d-md-block ">
              <img
                src={logo}
                alt="login form"
                className="img-fluid p-4 d-block mx-auto w-75"
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit(submit)}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" ></i>
                    <span className="h1 fw-bold mb-0 display-1 fw-bold text-success">Jaam</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example17">Your Email address</label>
                    <input placeholder='Email' type="email" id="form2Example17" className="form-control form-control-lg" {...register("email",{required: true} )} />

                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example27">Your account Password</label>
                    <input placeholder='Password' type="password" id="form2Example27" className="form-control form-control-lg" {...register("password",{required: true} )} />

                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  
                  <p className="" >Don't have an account? <Link className="nav-link active" to="/signup">Register here!</Link></p>
                  {check && <p className='text-danger mb-0'>Invalid credentials!</p>}
                </form>
                  </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            </div>:
            <div className='container'>
              <p className='display-1 fw-bolder text-danger text-center login mt-5'>Hi {ui[0].username} !</p>
              <p className='display-6 text-center login'>You have signed in with email: {ui[0].email}</p>
              <img className='w-lg-25 w-sm-50 w-50 d-block mx-auto mt-3' src={usersvg} />
            </div>
          }
            
        </>
    );
}

export default Login;