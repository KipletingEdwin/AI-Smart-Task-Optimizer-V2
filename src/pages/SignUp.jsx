
import React, { useState } from 'react'
import { Link } from 'react-router';

export const SignUp = () => {

  const [error, setError] = useState('');

  return (
    <div>
      <div>
        <h1>Sign Up</h1>

        {
          error && (
            <div>
              {error}
            </div>
          )
        }

        <form>
          <fieldset>
            <div>
              <label>Name</label>
              <input 
              type='text'
              required
              />
            </div>
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
              <div>
              <label>Confirm Password</label>
              <input
              type='password'
              required
              />
             </div>
             <button>Sign Up</button>
          </fieldset>
        </form>

        <p>Already have an account? <Link to='/login'>Log In</Link></p>

      </div>
    </div>
  )
}
