
import { Layers } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

export const AuthLayout = () => {
  return (
    <section className='border-b p-5'>
        <nav className='flex justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <Layers/>
                <Link to='/' className='font-bold'>Task Optimizer</Link>
            </div>

            <div className='flex space-x-3'>
                <Link to='login' className='border px-2 ' >Login</Link>
                <Link to='/signup' className='border px-2  '>Sign Up</Link>
            </div>

        </nav>
    </section>
  )
}
