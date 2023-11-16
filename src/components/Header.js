import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {}).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(()=>{
    // user? console.log(user) : console.log('user Not Found')
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          

          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          navigate('/browse')
    
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate('/')
        }
      });
      //unsubscribe when component unmounts------
      return () => unsubscribe();


},[])
const handleGptSearchClick = ()=>{
  //Toggle GPT Search Button----
  dispatch(toggleGptSearchView())
  
}
const handleLanguageChange = (e)=>{
  // console.log(e.target.value)
  dispatch(changeLanguage(e.target.value))
  
}
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
         <img 
         className='w-44'
         src={LOGO}
        alt='logo'
        />
        {
          user &&<div className='flex p-2'>
            {
              showGptSearch && (
                <select className='p-2 bg-gray-800 text-white' onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} 
                    value={language.identifier}>{language.name}</option>)
                }
              </select>
              )
            }
            <button 
            className='py-2 px-4 mx-4 my-2 text-white bg-purple-700 rounded '
            onClick={handleGptSearchClick}
            >
              { showGptSearch? 'Home': 'GPT Search'}</button>
          <img className='w-16 h-16'
          alt='usericon' 
          src={user?.photoURL}

          />
          <button onClick={handleSignOut} className='font-bold text-white'>{'SignOut'}</button>
        </div>
        }
        

       

      
    </div>
  )
}

export default Header
