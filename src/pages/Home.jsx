import React from 'react'
import Header from '../Header'
import { useState } from 'react';
import { Link } from 'react-router-dom';
let homebg = '../../public/homeVid.gif'
function Home() {

    let [item, setItem] = useState([])

    function handleClick(e) { setItem(prv => [...prv, e.target.innerText]) }

    return (
        <>
            <div className='p-4 h-[100vh]'>
                <div className='boxingH1 w-screen flex h-fit justify-center items-center text-[5rem] md:text-[12rem] '><h1>Go Boxin!</h1></div>
                {/* ///////////////////////// */}
                <div className='w-screen    flex flex-col  items-center justify-center '>

                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-[3rem] Heading'>Choose your combination</h1>

                        <div className='flex flex-col md:flex-row'>
                            <button onClick={handleClick} className='m-2 button-86'>Jab</button>
                            <button onClick={handleClick} className='m-2 button-86'>Cross</button>
                            <button onClick={handleClick} className='m-2 button-86'>Hook</button>
                            <button onClick={handleClick} className='m-2 button-86'>Uppercut</button>
                            <button onClick={handleClick} className='m-2 button-86'>Slip</button>
                        </div>
                    </div>

                    <div className='combiList w-[60vw]'>

                        <ul className='flex'>

                            {item.map((item, index) => <li className='combiItem' key={index}><div className='itemElem flex items-center justify-center rounded-lg'>{index+1}. {item}</div></li>)}

                        </ul>

                    </div>

                </div>
                {/* ////////////////////// */}

            <Link to='/play'><div className=' w-screen flex justify-center items-center mt-[5vh]'><button className='button-49'>START</button></div></Link> 
            </div>   </>
    )














};






export default Home







