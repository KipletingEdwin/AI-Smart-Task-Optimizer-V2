
import { Link } from 'react-router'
import { Header } from '../components/Header'
import { DemoPreview } from '../components/DemoPreview'

const STEPS = [
  { title: 'Type what you need to do', description: 'One line, in your own words. No structure required.' },
  { title: 'Get an ordered plan', description: 'It\'s broken into steps, each with a time estimate.' },
  { title: 'Work through it', description: 'Check off steps as you go. Nothing gets lost.' },
];

export const AuthLayout = () => {


  return (
    <> 
        <Header/>
        <div className='mx-auto px-6 py-20'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div>
                    <h1 className='text-4xl md:text-5xl font-semibold leading-tight max-w-md mb-5'>Turn a vague task into a plan you can start right now.</h1> 
                    <p className='text-ink-muted max-w-sm mb-8 text-lg'> Type what you need to do. It gets broken into ordered steps with time estimates, in seconds.</p>
                    <Link to='signup' className="inline-block bg-ink text-paper px-6 py-3 rounded-sm hover:bg-ember transition-colors" >Start planning your tasks</Link>
                </div>
                <DemoPreview/>
            </div>

            <div className='mt-28 grid md:grid-cols-3 gap-8'>
                {
                    STEPS.map((step, index) => {
                        return <div key={step.title} className='flex gap-3'>
                            <span>
                                { String(index + 1).padStart(2, '0')}
                            </span> 
                            <div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>

                        </div>
                    })
                }
            </div>

        </div>
    </>
  )
}
