
import React, { useState } from 'react'
import { Link } from 'react-router';

export const SignUp = () => {

  const [error, setError] = useState('');

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-sm p-8 rounded-sm border'>
        <h1 className='text-2xl font-semibold mb-6 text-center'>Sign Up</h1>

        {
          error && (
            <div className='mb-4 p-3 bg-ember-soft text-ember rounded-sm text-sm'>
              {error}
            </div>
          )
        }

        <form className='space-y-4'>
          <fieldset className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>Name</label>
              <input 
              type='text'
              className="w-full px-3 py-2 border border-line rounded-sm focus:outline-none focus:ring-2 focus:ring-ember disabled:opacity-50"
              required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
              type='email'
              className="w-full px-3 py-2 border border-line rounded-sm focus:outline-none focus:ring-2 focus:ring-ember disabled:opacity-50"
              required
              />
             </div>
             <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
              type='password'
              className="w-full px-3 py-2 border border-line rounded-sm focus:outline-none focus:ring-2 focus:ring-ember disabled:opacity-50"
              required
              />
             </div>
              <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
              type='password'
              className="w-full px-3 py-2 border border-line rounded-sm focus:outline-none focus:ring-2 focus:ring-ember disabled:opacity-50"
              required
              />
             </div>
             <button
             type='submit'
             className="w-full flex items-center justify-center gap-2 bg-ink text-paper py-2 rounded-sm hover:bg-ember transition-colors disabled:opacity-60"
             >Sign Up</button>
          </fieldset>
        </form>

        <p className="mt-4 text-sm text-center text-ink-muted">Already have an account? <Link to='/login' className="text-ember hover:underline">Log In</Link></p>

      </div>
    </div>
  )
}
