import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Course() {
    let navigate=useNavigate();
    let ci=useSelector(state=>state.ci) 
    let [url,curl]=useState(ci[0].sources[0].link)
    
    return(
        <div className='row'>
            <h1 className='mt-3 text-success fw-bolder text-center text-decoration-underline head'>{ci[0].name}</h1>
            <div className='col col-lg-8 col-md-8 col-sm-11 col-11 mt-4 bg-danger mx-auto'>
                <iframe className='mt-4 w-100 bg-danger yt' src={
                    url[13]==='.'?`https://www.youtube.com/embed/${url.slice(17)}`:url
                } allowFullScreen></iframe>
                <p className='text-center text-light'>{ci[0].description}</p>
            </div>
            <div className='col pt-4 mt-4 bg-secondary mt100'>
            {
            ci[0].sources.map((v,index)=>
                <button onClick={()=>curl(ci[0].sources[index].link)} type="button" className="w-100 m-2 mx-auto pulse" key={index}>{v.name}</button>
            )
            }
            </div>
        </div>
    );
}

export default Course;