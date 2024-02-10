import React from 'react'
import { useState } from 'react'


function Play() {

let [ arr , setArr]= useState(['cross','jab'])
   
function handleClick(){

   

arr.map((e)=>{
    
let audioUrl = require(`url:../../public/${e}.mp3`);
let sound = new Audio(audioUrl);

sound.play()})

}







  return (
    <div onClick={handleClick}>Play</div>
  )
}

export default Play
