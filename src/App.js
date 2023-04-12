
import './App.css';

function App() {
  const name = "Nasim Qureshi";
  const age = 69;
  const email = "qureshi.nasim2yahoo.com"
  const user = (
    {name},
    {age},
    {email}
  );
  return (
    <div className="App">
    {user}   
    </div>
  );
}

export default App;
