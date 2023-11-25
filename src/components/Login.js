import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, User_Avatar } from '../utils/constants';

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errormessage,setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const HandleBtnClick = ()=>{
        //Validate the form Data------
        const message = checkValidData(email.current.value,password.current.value)

        setErrorMessage(message)
        if (message) return 

        //signIn SignUp Logic-----

        if (!isSignInForm){
            //SignUp logic -----
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value)
                .then((userCredential) => {
            // <<<<<<<<<<<<<<      Signed up      >>>>>>>>>>>>>>>>>>>
                const user = userCredential.user;

                updateProfile(auth.currentUser, {
                    displayName: name.current.value,
                    photoURL: User_Avatar
                  }).then(()=>{
                    const {uid,email,displayName,photoURL} = auth.currentUser;

                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))

                    // Profile updated!
                    // navigate('/browse')
            
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message)
                  });

                
                console.log(user)
               
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
                // ..
            });

        }else{
            //SignIn Logic ---
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
               
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            });
        }
    }
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)


    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={BG_URL}
        alt='logo'
        />
        </div>
        <form 
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-75'
            onSubmit={(e)=> e.preventDefault()}
        >
            <h1 className='text-white font-bold text-3xl py-4'>{isSignInForm? 'Sign In': 'Sign Up'}</h1>
            {
                !isSignInForm && <input type='text' 
                ref={name}
                placeholder='Full Name'
                className='p-4 my-4 w-full bg-gray-300'
                />

            }
            <input 
            type='text' 
            ref={email}
            placeholder='Email Address'
             className='p-4 my-4 w-full bg-gray-300'
            />
            
            
            <input 
            type='password' placeholder='Password'
            ref={password}
             className='p-4 my-4 w-full bg-gray-300'
            />
            <p className='text-red-500 font-bold text-lg py-2'>{errormessage}</p>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={HandleBtnClick}>
                {isSignInForm? 'Sign In': 'Sign Up'}</button>

            <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}
            >{isSignInForm? 'New To Netflix ? Sign Up Now': 'Already a User ? Sign In Now'}
            </p>
        </form>        
    </div>

  )
}

export default Login
