import React from 'react'
import { useState } from 'react'


function Play(props) {

    console.log(props)

    let [arr, setArr] = useState(['cross', 'slip', 'hook', 'uppercut', 'jab'])
    let time = 500;

    function handleClick() {

        for (let a = 0; a < arr.length; a++) {
            let punchName = arr[a]

            if (punchName == 'cross') {


                let audioUrl = require(`url:../../public/cross.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);


            }
            else if (punchName == 'jab') {


                let audioUrl = require(`url:../../public/jab.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);
            }
            else if (punchName == 'hook') {


                let audioUrl = require(`url:../../public/hook.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);
            }
            else if (punchName == 'uppercut') {


                let audioUrl = require(`url:../../public/uppercut.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);
            }

            else if (punchName == 'slip') {


                let audioUrl = require(`url:../../public/slip.mp3`);
                let sound = new Audio(audioUrl);
                setTimeout(() => {
                    sound.play()
                }, a * time);
            }
        }
    }

    return (
        <div onClick={handleClick}>Play</div>
    )
}

export default Play







