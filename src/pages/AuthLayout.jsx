
import { Layers } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { Header } from '../components/Header'

export const AuthLayout = () => {


  return (

    <Header/>


    // <header className='border-b p-5'>
    //     <nav className='flex justify-between'>
    //         <div className='flex items-center justify-center gap-2'>
    //             <Layers/>
    //             <Link to='/' className='font-bold'>Task Optimizer</Link>
    //         </div>
    //         <div className='flex space-x-3'>
    //             <Link to='login' className='border px-2 ' >Login</Link>
    //             <Link to='/signup' className='border px-2  '>Sign Up</Link>
    //         </div>
    //     </nav>
    // </header>

  )
}
