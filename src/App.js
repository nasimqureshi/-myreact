
import './App.css';

function App() {
 
  return (
    <div className="App">
    <User name="Nasim" age={69} email="qureshi.nasim@yahoo.com" />   
    <User name="Qamar" age={64} email="qureshi.nasim@yahoo.com" />   
    <User name="Samreen" age={41} email="qureshi.nasim@yahoo.com" />   
      
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
    
    
  )
}

export default App;
