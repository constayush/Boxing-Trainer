import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
    
    let [item, setItem] = useState([])


    let Navigate = useNavigate();


    function handleClick(e) { setItem(prv => [...prv, e.target.innerText]) }


    function handlePlayClick() { Navigate('/play', { state: { combo: item } }); }




    return (
        <>
            <div className=' HOME p-4 h-[100vh] w-screen'>
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

                            {item.map((item, index) => <li className='combiItem' key={index}><div className='itemElem flex items-center justify-center rounded-lg'>{index + 1}. {item}</div></li>)}

                        </ul>

                    </div>

                </div>

                <div className=' w-screen flex justify-center items-center mt-[5vh]'><button onClick={handlePlayClick} className='button-49'><Link to='/play'>START</Link></button></div>
            </div>



        </>
    )













};






export default Home







