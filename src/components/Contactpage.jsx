import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/contact", {
        name,
        email,
        message
      })
      setName("");
      setEmail("");
      setMessage("");
      setError("Message Send Sucessfully Successfully")
      navigate('/')
    } catch (error) {
      setError(error.response.data.message)
    }
  };

  return (
    <>
    <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-red/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Contact Us</h1>
              {error && <p className='bg-red-600 py-3 my-6'>{error}</p>}
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                 onChange={(e) => setName(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='name'
                  placeholder='Name'
                  autoComplete='Name'
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                 onChange={(e) => setMessage(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='text'
                  placeholder='Your Kind Words'
                  autoComplete='message'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold' >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default MyForm;
