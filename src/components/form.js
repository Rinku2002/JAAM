import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../images/logo.Bi8fo6'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Signup() {
  let [check,changecheck]=useState(false);
  const {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  const submit= async (data)=>{
      changecheck(false)
      const axios = require('axios');
      const d =await axios.post("/user-api/create-user",data);
      
      if(d.data.message==="New User created"){
        alert("User created!")
        navigate("/login")
      }
      else if(d.data.message==="email already exists"){
        changecheck(true)
        check=true
      }
  }
  return (
    <div className='bg-inf pt-3 pd-3'>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className='display-1 fw-bold text-success' >Jaam</p>
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    
                    <form className="mx-1 mx-md-4 mb-4" onSubmit={handleSubmit(submit)}>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Your username</label>
                          <input placeholder='Name' type="text" id="form3Example1c" className="form-control" {...register("username",{required: true} )} />
                        </div>
                        {errors.username?.type=='required' && <p className='text-danger'>Username cannot be empty</p>}
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          <input placeholder='Email' type="email" id="form3Example3c" className="form-control" {...register("email",{required: true} )}/>
                        </div>
                        {errors.email?.type=='required' && <p className='text-danger'>Email cannot be empty</p>}
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                          <input placeholder='Password' type="password" id="form3Example4c" className="form-control" {...register("password",{required: true} )}/>
                        </div>
                        {errors.password?.type=='required' && <p className='text-danger'>Password cannot be empty</p>}
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">Confirm password</label>
                          <input placeholder='Confirm Password' type="password" id="form3Example4cd" className="form-control" {...register("cpassword",{required: true} )} />
                        </div>
                        {errors.cpassword?.type=='required' && <p className='text-danger'>Please type your password here again</p>}
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" {...register("terms",{required: true} )}/>
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                        {errors.terms?.type=='required' && <p className='text-danger'>Cannot be empty</p>}
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                      </div>
                      {check==true && <p className='text-danger'>Email already exist. Try to login!</p>}
                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src={logo} className="img-fluid w-75 d-block mx-auto" alt="Jaam logo" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
