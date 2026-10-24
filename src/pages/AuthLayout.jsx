
import { Link } from 'react-router'
import { Header } from '../components/Header'
import { DemoPreview } from '../components/DemoPreview'

export const AuthLayout = () => {


  return (
    <> 
        <Header/>
        <div className='mx-auto px-6 py-20'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div>
                    <h1 className='text-4xl md:text-5xl font-semibold leading-tight max-w-md mb-5'>Turn a vague task into a plan you can start right now.</h1> 
                    <p className='text-ink-muted max-w-sm mb-8 text-lg'> Type what you need to do. It gets broken into ordered steps with time estimates, in seconds.</p>
                    <Link to='signip' className="inline-block bg-ink text-paper px-6 py-3 rounded-sm hover:bg-ember transition-colors" >Start planning your tasks</Link>
                </div>
                <DemoPreview/>
            </div>

        </div>
    </>
  )
}
