import { useState } from "react";

function MyForm(){
//    const [name, setName] = useState('');
//    const [age, setAge] = useState('');
//    const [email, setEmail] = useState('');
  
//    console.log('current state', name);

// multiple input handle
   const [inputs, setInputs] = useState({phone:+91, email:'@gmail.com'});
   

   function handleSubmit(e){
    e.preventDefault();   // to prevent the refresh of browser
    console.log('submit-value');
    // console.log('current state', name,age,email);
    console.log("curent-state", inputs);
   }

  //Simplifying onChange Handler
  function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setInputs((...previousValues)=>{return {...previousValues, [name] : value}})
  }



    return <form onSubmit= { handleSubmit } >
        {/* <label>Enter Your Name: <input type='text' onChange={(e) =>{ setName(e.target.value) }} /></label><br/>
        <label>Enter Your Age: <input type='text' onChange={(e) =>{ setAge(e.target.value) }} /></label><br/>
        <label>Enter Your Email: <input type='text' onChange={(e) =>{ setEmail(e.target.value) }} /></label> */}
        
        {/*  multiple input handle && values are getting from single state hook for all inputs: */}
        {/* <label>Enter Your Name: <input type='text' onChange={(e) =>{ setInputs((previousValues)=> {return {...previousValues, name: e.target.value}}) }} /></label><br/>
        <label>Enter Your Age: <input type='text' onChange={(e) =>{ setInputs((previousValues)=> {return{...previousValues, age: e.target.value}}) }} /></label><br/>
        <label>Enter Your Email: <input type='text' onChange={(e) =>{ setInputs((previousValues)=> {return {...previousValues, email: e.target.value}}) }} /></label> */}


        {/* Simplifying onChange Handler */}
        <label>Enter Your Name: <input type='text' name='name' onChange={handleChange} /></label><br/>
        <label>Enter Your Age: <input type='text' name='age' onChange={handleChange} /></label><br/>
        {/* <label>Enter Your Email: <input type='text' name='email' onChange={handleChange} /></label><br/>
        <label>Enter Your Phone: <input type='text' name='phone' onChange={handleChange} /></label><br/>
  */}

           {/* Setting Initial Form Values on forms */}

         <label>Enter Your Email: <input type='text' name='email' value = {inputs.email} onChange={handleChange} /></label><br/>
        <label>Enter Your Phone: <input type='text' name='phone' value={ inputs.phone} onChange={handleChange} /></label><br/> 
        <label>Enter Your Country: 
            <select name='country' value={ inputs.country} onChange={handleChange} >
                <option value = ''>select</option>
                <option value = 'India'>India</option>
                <option value = 'China'>China</option>
                <option value = 'America'>America</option>
                
                </select></label><br/>
        <label>Enter about yourself</label>
        <input type ='submit' value = 'submit Form'/>
    </form>
}

export default MyForm ;