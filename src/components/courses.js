import React, { useState } from 'react';
import {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { addcinfo } from '../slices/courseinfoslice'
import loginsvg from '../svg icons/loginsvg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'

function Courses() {
    const dispatch=useDispatch()
    let ci=useSelector(state=>state.ci)
    let ui=useSelector(state=>state.ui)
    let navigate=useNavigate()
    let [dd,setdd]=useState([])
    useEffect(() => {
        fetch('/courses-api/courses')
        .then(response => response.json())
        .then(data => setdd(data.payload))
      },[])
      function funcc(v){
          let actionObj=addcinfo(v)
          dispatch(actionObj)
      }
    console.log(dd)
    return(
        <>
        {ui.length==0 ?
        <div>
            <p className='display-1 fw-bolder text-danger text-center login mt-5'>Login</p>
            <p className='display-3 text-center login'>To access the courses</p>
            <button onClick={()=>navigate('/login')} className='btn btn-success d-block mx-auto'>Login</button>
            <img className='w-lg-25 w-sm-50 w-50 d-block mx-auto mt-3' src={loginsvg} />
        </div>:
        <div className='row mt-5 justify-content-start'>
        {
        dd.map((v,index)=>
            <Link onClick={()=>funcc(v)} to="/course" key={index} className='col col-lg-3 col-md-3 col-sm-12 col-12 text-center border border-5 border-info bg-light pt-4 rounded rounded-5 course'>
                <img src={v.tnumbnail} className='w-100 h-75' />
                <p className='mb-0 text-dark'>{v.name}</p>
            </Link>
        )
        }
        </div>
        }
        </>
    );
}

export default Courses;