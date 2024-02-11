import React from 'react'
import { useState } from 'react'


function Play() {

    let [arr, setArr] = useState(['cross', 'slip'])









    function handleClick() {



        arr.map((punchName) => {


            let audioUrl = require(`url:../../public/${punchName}.mp3`);
            let sound = new Audio(audioUrl);
          
                sound.play()



            // if (punchName == 'cross') {


            //     let audioUrl = require(`url:../../public/cross.mp3`);
            //     let sound = new Audio(audioUrl);
            //     sound.play()
            // }
            // else if (punchName == 'jab') {


            //     let audioUrl = require(`url:../../public/jab.mp3`);
            //     let sound = new Audio(audioUrl);
            //     sound.play()
            // }

            // else if (punchName == 'hook') {


            //     let audioUrl = require(`url:../../public/hook.mp3`);
            //     let sound = new Audio(audioUrl);
            //     sound.play()
            // }

            // else if (punchName == 'uppercut') {


            //     let audioUrl = require(`url:../../public/uppercut.mp3`);
            //     let sound = new Audio(audioUrl);
            //     sound.play()
            // }

            // else if (punchName == 'slip') {


            //     let audioUrl = require(`url:../../public/slip.mp3`);
            //     let sound = new Audio(audioUrl);
            //     sound.play()
            // }


        })
    }







    return (
        <div onClick={handleClick}>Play</div>
    )
}

export default Play
