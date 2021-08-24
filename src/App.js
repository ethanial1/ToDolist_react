import { useState } from 'react';
import './App.css';

function App() {
  // Definimos algunos estados
  const [username, setuserName] = useState('ethan');
  const [taskItems, settaskItems] = useState([
    {
      name: "Task one",
      done: false
    }
  ]);
  
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
