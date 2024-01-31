import Car from './car';
import Apple from './Apple';

function Garage(){

   {/* conditional rendering  Type 2*/}

   const isDooropened = false;

    // const carBrand = 'Ford';
    // const color = "Red";
 
    const carInfo = {brand:'ford', color:'red'};
    const appleInfo = { type:'fuji', color:'red'};

     {/* conditional rendering */}
    //const carInfo ={};

    // topic 4: List & Keys for object

    const carList = [
      {brand:'ford', color:'red'},
      {brand:'ferrari', color:'blue'},
      {brand:'bmw', color:'black'}
    ]

     // topic 4: List & Keys for aray
     const numberList = [1,2,3,4,5,3,2,4,5];

    return(
      <>
      <h3>Im the garage</h3>
      {/* <Car car={carBrand} carColor={color}/> */}
 
 {/* conditional rendering */}
      {carInfo.brand !== undefined && carInfo.color !== undefined ?
      <Car carProp={carInfo}/> : null }
      <Apple appleDetail={ appleInfo }/>


   {/* conditional rendering  Type2*/}
   {isDooropened?<h2>Im opened</h2>:<h2>Im closed</h2>}  

   {/* topic 4: List Implementation:  && keyList*/}
   <ul>
    {carList.map((carInfo) => <li key = {carInfo.brand}> <Car carProp={carInfo}/></li>)}
   </ul>

   {/* topic 4: List Implementation:  && keyList for array*/}

   {numberList.map((e,index)=><p keys={index}>{e}</p>)}
      </>
    )
  }

  export default Garage;