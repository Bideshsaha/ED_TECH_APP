import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import CountryCode from '../../data/countrycode.json'
// import { apiConnector } from '../../services/apiConnector'
// import { contactusEndpoint } from '../../services/endpoint'

const CountactUsForm = () => {

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}

    } = useForm();

    const submitContactForm = async(data) => {
        console.log("Logging Data", data);
        try{
            setLoading(true);
            // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
            const response = {status:"OK"};
            console.log("Contact Form Response", response);
            setLoading(false);  
        } catch(error){
            console.error("Error submitting contact form", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                phoneNo:"",
            })
        }

    },[isSubmitSuccessful, reset])

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
        <div className='flex flex-col gap-14'>
                <div className='flex gap-5'>
                {/* firstName */}
                    <div className='flex flex-col'>
                        <label htmlFor='firstname'>First Name</label>
                        <input
                            type='text'
                            name='firstname'
                            id='firstname'
                            placeholder='Enter first name'
                            className='text-black'
                            {...register("firstname", {required:true})}
                        />
                        {
                            errors.firstname && (
                                <span>
                                    Please Enter Your name
                                </span>
                            )
                        }
                    </div>
                    {/* lastName */}
                    <div className='flex flex-col'>
                        <label htmlFor='lastname'>Last Name</label>
                        <input
                            type='text'
                            name='lastname'
                            id='lastname'
                            placeholder='Enter last name'
                            className='text-black'
                            {...register("lastname")}
                        />
                    </div>
                </div>
                {/* email */}
                <div className='flex flex-col'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter email address'
                        className='text-black'
                        {...register("email", {required:true, pattern: /^\S+@\S+\.\S+$/})}
                    />
                    {
                        errors.email && (
                            <span>
                                Please Enter a valid email address
                            </span>
                        )
                    }
                </div>
                {/* phone */}
                <div className='flex flex-col gap-x-10'>
                    <label htmlFor='phonenumber'>Phone Number</label>

                    <div className='flex flex-row gap-1'>
                        {/* dropdown */}
                        {/* <div className='flex flex-col gap-2 w-[80px]'> */}
                            <select name='dropdown' id='dropdown' className='text-black' {...register("countrycode" , {required:true})}>
                                {
                                    CountryCode.map((element,index) => {
                                        return(
                                            <option key={index} value={element.code}>
                                                {element.code} -{element.country}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        {/* </div> */}

                        {/* <div className='flex w-[calc(100%-90px)] flex-col gap-2'> */}
                            <input 
                                type='number'
                                name='phonenumber'
                                id='phonenumber'
                                placeholder='12354 78965'
                                className='text-black'
                                {...register("phoneNo", 
                                    {
                                        required:{value:true, message:"Please Enter Your Phone Number"},
                                        maxLength: {value:10, message:"Phone number cannot exceed 10 digits"},
                                        minLength: {value:8, message:"Phone number should be at least 8 digits"},

                                    })}
                            />
                        {/* </div> */}

                    </div>
                    {
                        errors.phoneNo && (
                            <span>
                                {errors.phoneNo.message}
                            </span>
                        )
                    }
                </div>
                {/* message */}
                <div className='flex flex-col'>
                    <label htmlFor='message'>Message</label>
                    <textarea 
                        name='message'
                        id='message'
                        cols="30"
                        rows="7"
                        placeholder='Enter Your Message'
                        className='text-black'
                        {...register("message", {required:true})}
                    />
                    {
                        errors.message && (
                            <span>
                                Please Enter Your Message
                            </span>
                        )
                    }
                </div>

            {/* </div> */}
            <button type='submit' className='rounded-md bg-yellow-50 text-center px-6 text-[16px] font-bold text-black'>
                Send Message
            </button>
        </div>
    </form>
  )
}

export default CountactUsForm
