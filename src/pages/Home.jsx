import React from 'react'
import Header from '../Header'

let homebg = '../../public/homeVid.gif'
function Home() {
    return (
        <>
            <Header />
            <div className='flex m-4 gap-4 items-center justify-center'>

                <div className='w-screen md:w-[50vw] h-[50vh] bg-[red] p-7 flex flex-col items-center justify-center'>

                    <h1 className='text-[3rem]'>Choose your combination</h1>
                    <button className='m-2 punchBtn'>Jab</button>
                    <button className='m-2 punchBtn'>Cross</button>
                    <button className='m-2 punchBtn'>Hook</button>
                    <button className='m-2 punchBtn'>Slip</button>
                    
                </div>


                <div className='w-screen md:w-[50vw] h-[50vh] bg-[red]'>
        
        <h1 className='text-[3rem] m-10'>Your Combination</h1>
                </div>

            </div>


        </>
    )
}

export default Home