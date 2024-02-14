import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

function Play() {


    let loco = useLocation()




let dur =loco.state.dur
let time =loco.state.time

  


    let [arr, setArr] = useState([...loco.state.combo]);


    function handleClick() {
        console.log(dur)
        console.log(arr)
        for (let a = 0; a < arr.length; a++) {

            console.log(arr[a])

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

    return (
        <div className='PLAY w-screen h-screen flex flex-col items-center justify-center ' >

            <button onClick={handleClick}>GET IT!</button>


        </div>
    )
}

export default Play







