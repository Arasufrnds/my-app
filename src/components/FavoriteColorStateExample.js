import { useState } from "react";


function FavouriteColorStateExample(){
   //let color = 'Blue';
   const [color, setColor] = useState('Blue');

    return <>
    <h1>My favourite color is {color}</h1>
    <botton style={{backgroundColor: 'pink'}}onClick={()=>{ setColor('Red')}}>change color</botton>
    </>
}

export default FavouriteColorStateExample;