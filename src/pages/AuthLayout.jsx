
import React from 'react'
import { Link } from 'react-router'

export const AuthLayout = () => {
  return (
    <section className='border-b p-5'>
        <nav className='flex justify-between'>
            <div>
                <Link>Task Optimizer</Link>
            </div>

            <div className='flex gap-2'>
                <Link to='login' className='border rounded-2xl' >Login</Link>
                <Link to='/signup' className='border rounded-2xl'>Sign Up</Link>
            </div>

        </nav>
    </section>
  )
}
