
import React, { useState } from 'react'
import { Link } from 'react-router';

export const Login = () => {

  const [error, setError] = useState('');


  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-sm p-8 rounded-sm border'>
        <h1 className='text-2xl font-semibold mb-6 text-center'>Log In</h1>
        {
          error && (
            <div className='mb-4 p-3 bg-ember-soft text-ember rounded-sm text-sm'>
              {error}
            </div>
          )}

          <form className='space-y-4'>
            <fieldset>
              <div>
                <label>Email</label>
                <input
                type='email'
                required
                 />
              </div>
              <div>
                <label>Password</label>
                <input
                type='password'
                required
                  />
              </div>
              <button>Log In</button>
            </fieldset>
          </form>
          <p>Don't have account?<Link to='/signup'>Sign Up</Link></p>
      </div> 
    </div>
  )
}
