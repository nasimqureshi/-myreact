
import './App.css';

function App() {
  const age= 19;
  return (
    <div className='App'>
      {age >= 20 ? <h1>Over age</h1> : <h1>Under Age</h1>}
    </div>
  );

  
 
  // return (
  //   <div className="App">
  //   <User name="Nasim" age={69} email="qureshi.nasim@yahoo.com" />   
  //   <User name="Qamar" age={64} email="qureshi.nasim@yahoo.com" />   
  //   <User name="Samreen" age={41} email="qureshi.nasim@yahoo.com" />
  //   <Job salary={2000} position="software" company= "Amazon"   />
  //   </div>
    
  // );
}

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

export default App;
