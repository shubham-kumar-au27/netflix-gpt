import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);


    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)


    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='logo'
        />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-75'>
            <h1 className='text-white font-bold text-3xl py-4'>{isSignInForm? 'Sign In': 'Sign Up'}</h1>
            {
                !isSignInForm && <input type='text' 
                placeholder='Full Name'
                className='p-4 my-4 w-full bg-gray-300'
                />

            }
            <input 
            type='text' 
            placeholder='Email Address'
             className='p-4 my-4 w-full bg-gray-300'
            />
            
            
            <input 
            type='password' placeholder='Password'
             className='p-4 my-4 w-full bg-gray-300'
            />

            <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm? 'Sign In': 'Sign Up'}</button>

            <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}
            >{isSignInForm? 'New To Netflix ? Sign Up Now': 'Already a User ? Sign In Now'}
            </p>

        </form>
        
    </div>

  )
}

export default Login
