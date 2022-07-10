
import React from 'react';
import { createRef, useState } from 'react';

const Item = ({name,price}) =>(
  <li>{name}, ${price}</li>
)


// Function Component
const App = props =>{
  let [items,setItems] = useState([
    {id:1, name:'Apple', price:0.99},
    {id:2, name:'Banana', price:0.88}
  ]);

  let nameRef = createRef();
  let priceRef = createRef();
  let add =()=>{
    let id = items.length +1;
    let name = nameRef.current.value;
    let price = priceRef.current.value;
    setItems([
      ...items,
      {id,name,price}
    ]);
  }
  return(
    <div>
      <h1>Hello React</h1>
      <ul>
        {items.map(i=>(
          <Item key={i.id} name={i.name} price={i.price}/>
        ))}
      </ul>
      <input type='text' ref={nameRef}/> <br/>
      <input type='text' ref={priceRef}/> <br/>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default App;


















