
import './App.css';
import { useState } from 'react';

// function App() {
//   const age= 19;
//   return (
//     <div className='App'>
//       {age >= 20 ? <h1>Over age</h1> : <h1>Under Age</h1>}
//       <h1 style={{color: "blue"}}>Hi Nasim</h1>
//     </div>
//   );
// }
// function App() {
//   const names = ['Nasim','Qamar','Samreen','Hira','Nida','Sana'];

//   return (
//     <div className='App'>
//       {names.map((name, key) => {
//         return (
// //           <h1 key={key}> {name} </h1>
// //         )
// //       })}
// //     </div>
// //   )

 
// }

  
 
  // return (
  //   <div className="App">
  //   <User name="Nasim" age={69} email="qureshi.nasim@yahoo.com" />   
  //   <User name="Qamar" age={64} email="qureshi.nasim@yahoo.com" />   
  //   <User name="Samreen" age={41} email="qureshi.nasim@yahoo.com" />
  //   <Job salary={2000} position="software" company= "Amazon"   />
  //   </div>
    
  // );


// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
    
    
//   )
// }
// const Job = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//       {props.position}
//       {props.company}
//     </div>
//   )
// }


// COUNTER

// function App(){
//   const [age, setAge] = useState(0)
  
//   const increaseAge = () => {
//     setAge(age + 1);
//   };
//   return (
//     <div className='App'>
//       {age}
//       <button onClick={increaseAge}> Increase Age </button>
//     </div>
//   );
// }

// Another Exemple of Hook

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handelInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

// return(
//   <div className='App'>
//     <input type='text' onChange={handelInputChange} />
//     {inputValue}
//   </div>
// )
// }
// Another example of useState.
function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className='App'>
    <button onClick={() => {
      setShowText(!showText)
    }}> Show / Hide </button>
    
    {showText === true && <h1> Nasim </h1>}
    </div>
  );
}

export default App;
