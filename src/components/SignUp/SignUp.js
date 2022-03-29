import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const { setUserData } = props.state;
  // ----------- read the value --------------
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const nav = useNavigate();
  const signUpHandler = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    setUserData({ name, email });
    if (name !== '') {
      nav('/profiles');
    }
    
  }
  return (
    <div className='flex justify-center items-center my-10'>
      <section className=' w-1/3 bg-slate-800 flex flex-col items-center rounded-xl py-5'>
        <h2 className='text-2xl font-bold text-amber-200 mb-3'>Sign Up Here</h2>
        <div className=' w-3/4'>
          <form >
            <input required ref={nameRef} className='border border-sky-500 p-2 my-3 rounded w-full' type="text" placeholder='Name' /><br />
          <input required ref={emailRef} className='border border-sky-500 p-2 my-3 rounded w-full' type="Email" placeholder='Email' /><br />
          <input required ref={passRef} className='border border-sky-500 p-2 my-3 rounded w-full' type="password" placeholder='Password' /><br />
          <input required className='border border-sky-500 p-2 my-3 rounded w-full' type="password" placeholder='Re-type password' /><br />
          <button onClick={signUpHandler}  className='border bg-yellow-200 p-2 my-3 rounded w-full text-xl font-semiBold'>Sign Up</button>
          </form>
          
        </div>
      </section>
    </div>
  );
};

export default SignUp;