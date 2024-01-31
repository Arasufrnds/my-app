import { useState } from "react";

function FunctionMultipleHooks(){

    // const [color, setColor] = useState('blue')
    // const [brand, setBrand] = useState('Ford')
    // const [model, setModel] = useState('6g')
    // const [year, setYear] = useState('2020')

    //state with Object
    const [scooter, setScooter] = useState(
        {
            color: 'red',
            brand: 'ford',
            model: '6g',
            year: '2020'
        })

        function updateColor(){
           setScooter(previousValue =>{
            return {...previousValue, color:'blue'}
           }) 
        }

    return <>
    {/* <h1>My Scooter</h1>
    <p>color: { color }</p>
    <p>brand: {brand}</p>
    <p>Model: {model}</p>
    <p>Year: {year}</p> */}


<h1>My Scooter</h1>
    <p>color: { scooter.color }</p>
    <p>brand: { scooter.brand }</p>
    <p>Model: { scooter.model }</p>
    <p>Year: { scooter.year }</p>
    <button onClick={updateColor}>change color</button>
    </>
}

export default FunctionMultipleHooks;