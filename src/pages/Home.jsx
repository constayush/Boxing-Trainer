import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {

    let [item, setItem] = useState([])

    let Navigate = useNavigate();


    function handleClick(e) { setItem(prv => [...prv, e.target.innerText]) }




    let [dur, setDur] = useState()
    let [time, setTime] = useState()
    function handleDurChnage(e) { setDur(e.target.value * 1000) }
    function handleTimeChnage(e) { setTime(e.target.value) }


    function handlePlayClick() { Navigate('/play', { state: { combo: item, dur: dur, time: time } }); }

    return (
        <>
            <div className=' bg-[black] p-4 h-[100vh] w-screen flex justify-center items-center'>
                <div className='boxingH1 w-screen flex h-fit justify-center items-center text-[4rem] md:text-[12rem] '><h1>Go Boxin!</h1></div>
                {/* ///////////////////////// */}

            </div>




            <div className='configs overflow-hidden HOME p-4 h-fit w-screen flex justify-center items-center flex-col'>
                    <div className='w-screen    flex flex-col  items-center justify-center '>

                        <div className='flex flex-col items-center justify-center p-4'>
                            <h1 className='text-[2rem] md:text-[3rem] Heading'>Choose your combination</h1>

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


                    <div className='w-screen flex flex-col p-4 items-center justify-center gap-[2rem] mt-[1rem]  '>
                        <div className=' playH1 w-fit flex flex-col md:flex-row' onChange={handleTimeChnage}><h3>How long do you want to box?</h3> <input placeholder='0' className='rounded-lg playIn flex justify-center items-center w-[2rem] md:w-[4rem] p-[.25rem] bg-[#28282D] mx-2' type='number'></input><h3>Minutes</h3></div>
                        <div className=' playH1 w-fit flex flex-col md:flex-row' onChange={handleDurChnage} > <h3>duration in between punches</h3> <input placeholder='0' className='rounded-lg playIn flex justify-center items-center w-[2rem] md:w-[4rem] p-[.25rem] bg-[#28282D] mx-2' type='number'></input><h3>Seconds</h3></div>
                    </div>


                    <div className=' w-screen flex justify-center items-center mt-[2.5rem] md:mt-[5vh]'><button onClick={handlePlayClick} className='button-49'><Link to='/play'>START</Link></button></div>
                </div>



        </>
    )













};






export default Home







