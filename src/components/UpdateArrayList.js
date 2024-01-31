import { useState } from "react"

function UpdateArrayList() {

    const  [list, setList] = useState([]);
    const  [count, setCount] = useState(1);

function addItem(){
    const itemName = 'Item'+count;
    setList((previousValue) => { return [...previousValue, itemName]})
    setCount((previousValue)=> { return previousValue+1});
}



    return  <>
     <h1>List</h1>
     <button onClick={ addItem }>Add Item</button>
            <ul> {
                 list.map((el,index)=> <li key = {index}>{el}</li>)
                }
               
            </ul>
    </>
           
}

export default UpdateArrayList;