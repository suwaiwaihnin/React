// import React from 'react';
// import Toolbar from './Toolbar';
import { createRef, useState } from 'react';

// class Item extends React.Component{
//   render(){
//     return (
//       <li>
//         {this.props.name}, 
//         ${this.props.price}
//       </li>
//     )
//   }
// }

// const Item = props => (
//   <li>
//     {props.name},
//     ${props.price}
//   </li>
// )

// Function Component
const Item = ({name,price}) =>(
  <li>{name}, ${price}</li>
)

// class AddForm extends React.Component{
//   nameRef = React.createRef();
//   priceRef = React.createRef();
//   add = () =>{
//     let name = this.nameRef.current.value;
//     let value = this.priceRef.current.value;
//     this.props.add(name,value);
//   }
//   render(){
//     return(
//       <div>
//           <input type='text' ref={this.nameRef} /> <br />
//           <input type='text' ref={this.priceRef} /> <br/>
//           <button onClick={this.add}>Add</button>
//       </div>
//     )
//   }
// }


// Function Component
// const App1 = props =>{
//   let [items,setItems] = useState([
//     {id:1, name:'Apple', price:0.99},
//     {id:2, name:'Banana', price:0.88}
//   ]);

//   let nameRef = createRef();
//   let priceRef = createRef();
//   let add =()=>{
//     let id = items.length +1;
//     let name = nameRef.current.value;
//     let price = priceRef.current.value;
//     setItems([
//       ...items,
//       {id,name,price}
//     ]);
//   }
//   return(
//     <div>
//       <ul>
//         {items.map(i=>(
//           <Item key={i.id} name={i.name} price={i.price}/>
//         ))}
//       </ul>
//       <input type='text' ref={nameRef}/> <br/>
//       <input type='text' ref={priceRef}/> <br/>
//       <button onClick={add}>Add</button>
//     </div>
//   )
// }

// Context
const MyContext = React.createContext('Hello React Context');
const App = props =>{
  return(
      <Header />
  )
}
const Header = props =>(<Title />);

const Title = props =>{
    const value = React.useContext(MyContext);
    return <h1>{value}</h1>
}

// class Apps extends React.Component{
//   state = {
//     items: [
//       {id:1, name:'Apple', price:0.99},
//       {id:2, name:'Banana', price:0.88}
//     ]
//   }

//   add = (name,price) =>{
//     let id = this.state.items.length +1;
//     this.setState({
//       items:[
//         ...this.state.items,
//         // {id,name:`Item ${id}`, price:0.01*id}
//         {id,name,price}
//       ]
//     });
//   }

//   render(){
//     return (
//       <div>
//         <h1>Hello React</h1>
//         <ul>
//           {this.state.items.map(i => {
//             return(
//               <li>
//                 <Item 
//                 key={i.id} 
//                 name={i.name} 
//                 price={i.price} />
//               </li>
//             )
//           })}
//         </ul>
//         <Toolbar>
//           <h1>Hello World</h1>
//           <h2>First React</h2>
//         </Toolbar>
//         <AddForm add={this.add} />
//       </div>
//     )
//   }
// }

// export default App;
