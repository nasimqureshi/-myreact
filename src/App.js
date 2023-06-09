
import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import { Navbar } from './pages/Navbar';



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
// function App() {
//   const [showText, setShowText] = useState(true);

//   return (
//     <div className='App'>
//     <button onClick={() => {
//       setShowText(!showText)
//     }}> Show / Hide </button>
    
//     {showText  && <h1> Nasim </h1>}
//     </div>
//   );
// }

// Another example of useState by changing color of the text


// function App() {
//   const [textColor, setTextColor] = useState("blue");

//   return (
//     <div className='App'>
//     <button onClick={() => {
//       setTextColor(textColor ==="blue" ? "red" : "blue")
//     }}> Show / Hide </button>
    
//     <h1 style={{ color: textColor }}> Nasim </h1>
//     </div>
//   );
// }

/////////// Counter Exercise//////////

// function App() {
//   const [count, setCount] = useState(0);

//   const increase =() => {
//     setCount(count + 1)
//   }
//   const decrease = () => {
//     setCount(count - 1)
//   }
//   const setToZero = () => {
//     setCount(0)
//   }

//   return (
//     <div className='App'><br></br>
//       <button onClick={increase}> Increase </button>
//       <br></br>
//       <br></br>
//       <button onClick={decrease}> Decrease </button>
//       <br></br><br></br>
//       <button onClick={setToZero}> Set to Zero</button>
//       <br></br>
//       <h1>{count}</h1>
//     </div>
//   );
// }

///////////////// Component Lifecycle /////////////////////////\\
// function App(){
 
//   const [text, setText] = useState("");
  
//   return (
//     <div>
//       <input
//       onChange={(event) => {
//         setText(event.target.value);
//       }} />
//       <h1> {text} </h1>
//     </div>
//   )
// }


function App(){
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Navbar>
      </Router>
    </div>
  )
}

export default App;
