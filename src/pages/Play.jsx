import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import DisplayPunch from '../ui/DisplayPunch';
function Play() {


    let loco = useLocation()




    let dur = loco.state.dur
    let time = loco.state.time




    let [arr, setArr] = useState([...loco.state.combo]);

    function handleClick() { 
    
     start();
                
    
    }
    function start() {
        
        for (let a = 0; a < arr.length; a++) {

         

            let punchName = arr[a]

            if (punchName == 'Cross') {
                console.log(arr)

                let audioUrl = require(`url:../../public/cross.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * dur);


            }
            else if (punchName == 'Jab') {


                let audioUrl = require(`url:../../public/jab.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * dur);
            }
            else if (punchName == 'Hook') {


                let audioUrl = require(`url:../../public/hook.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * dur);
            }
            else if (punchName == 'Uppercut') {


                let audioUrl = require(`url:../../public/uppercut.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * dur);
            }

            else if (punchName == 'Slip') {


                let audioUrl = require(`url:../../public/slip.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * dur);
            }
        }
    }




    return (<>
        <div className='PLAY w-screen h-fit flex flex-col  ' >
           
            <div className='w-screen h-[10vh] flex justify-start items-start'> <Link to='/'><button className='btn41-43 btn-43 m-[2rem]'>back to configs</button></Link></div>
           <div className='w-screen h-[90vh] flex justify-center items-center'><button className='btn41-43 btn-43' onClick={handleClick}>GET IT!</button></div>

        </div>




    </>)
}

export default Play







