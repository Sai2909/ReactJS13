
// export default function UsingComponent(){

//     function handleClick(name){
//        alert(name)
//     }
  
//       return (
//         <button onClick={()=>handleClick('react')} >Click me</button>
//       )
  
//   }


// export default class UsingComponent extends React.Component {

//     constructor(props){
//       super(props);
//       this.state = {
//         num : 0
//       }
//     }
  
//     handleInc(){
//       this.setState({
//         num : this.state.num+1
//       })
//     }
  
//     render(){
//       return (
//          <div>
//           <h1>Counter</h1>
//           <h3>{this.state.num}</h3>
//           <button onClick={this.handleInc.bind(this)}>Increment</button>
//         </div>
//       )
//     }
//   }



// export default function UsingComponent(){

//     function handleClick(e){
//        console.log(e);
//        e.preventDefault();
//     }
  
//     return (
//         <> <a href="#" onClick={handleClick} >Click me</a></>
        
//     )
  
//   }


// export default class UsingComponent extends React.Component {
//     submitHandler = (event) => {
//       event.preventDefault();
//       // perform some form validation or other logic
//       // before submitting the form
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.submitHandler}>
//           <input type="text" placeholder="Enter your name" />
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//       );
//     }
//   }
  
import React,{useState} from 'react';

export default function UsingComponent() {
    //initial value set to react
 const [framework,setFramework] = useState('react');

 function handleChange(e){
    setFramework(e.target.value);
 };

  function handleSubmit(e){
    e.preventDefault();
    console.log(framework);
  };

    return (
      <form onSubmit={handleSubmit}>
        <h2>Choose your framework</h2>
        <select onChange={handleChange} value={framework}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
        <button className='btn btn-info' type="submit">Submit</button>
      </form>
    );
}  


