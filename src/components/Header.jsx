
import { Layers } from "lucide-react"
import { Link } from "react-router"

export const Header = () => {


  return (
        <header className="border-b">
            <div className="flex justify-between px-6 py-5">
                <span className="flex gap-2 font-semibold text-2xl items-center cursor-pointer"><Layers/>Task Optimizer</span>
                <div className="flex items-center gap-5 ">
                    <Link to='/login' className="text-ink-muted hover:text-ink">Log In</Link> 
                    <Link to='/signup' className="bg-ember px-4 py-2 transition-colors">Sign Up</Link> 
                </div>
            </div>
        </header>
  )
}










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