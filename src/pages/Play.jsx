import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

function Play() {


  let loco =   useLocation()

  let data = loco.state.combo ?  "error" : loco.state.combo;








    let [arr, setArr] = useState([loco.state.combo]);
    let time = 1000;

    function handleClick() {

        for (let a = 0; a < arr.length; a++) {
            let punchName = arr[a]

            if (punchName == 'Cross') {
                console.log(arr)

                let audioUrl = require(`url:../../public/cross.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);


            }
            else if (punchName == 'Jab') {


                let audioUrl = require(`url:../../public/jab.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);
            }
            else if (punchName == 'Hook') {


                let audioUrl = require(`url:../../public/hook.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);
            }
            else if (punchName == 'Uppercut') {


                let audioUrl = require(`url:../../public/uppercut.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);
            }

            else if (punchName == 'Slip') {


                let audioUrl = require(`url:../../public/slip.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);
            }
        }
    } 

    return (
        <div className='PLAY w-screen h-screen flex items-center justify-center ' >









<button onClick={handleClick}>GET IT!</button>












        </div>
    )
}

export default Play







