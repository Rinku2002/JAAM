import { useForm } from 'react-hook-form';
import { useState } from 'react'

function Contactus() {    
    const {register,handleSubmit,formState:{errors}}=useForm()
    let [check,ccheck]=useState(false)
    const submit= async (data)=>{
        //post request
        const axios = require('axios');
        if(check==false){
            let response=await axios.post("/contactus-api/send",data);
            console.log(response.status)
            if(response.status==200){
                ccheck(true)
                check=true
                alert("Form Submitted!");
            }
            else{
                alert("Something went wrong!")
            }
        }
    }
    return(
        <div>
        <div className="mt-5 conatiner">
            <div className="text-center">
                <h3 className="text-primary">How Can We Help You?</h3>
                <p className="lead fw-bold">Don't be shy, ask the Jaam</p>
            </div>
            <div className=" d-flex align-items-center justify-content-center ">
                <div className="bg-white col-md-4">
                    <form className="p-4 rounded shadow-md" onSubmit={handleSubmit(submit)}>
                        <div>
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Your Name" {...register("name",{required: true} )} />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="text" name="email" className="form-control" placeholder="Your Email" {...register("email",{required: true} )}/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" name="subject" className="form-control" placeholder="Subject" {...register("subject",{required: true} )}/>
                        </div>
                        <div className="mt-3 mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea name="message" cols="20" rows="6" className="form-control" placeholder="message" {...register("message",{required: true} )}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit Form
                        </button>
                    </form>
                    {check && <p className='p-3 text-danger'>Form submitted successfully!</p>}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contactus;