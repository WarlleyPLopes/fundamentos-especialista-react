import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState([
    'Warlley', 'Daniel', 'Marcos',
    'Michel', 'Alex'
  ])

  useEffect(() => {
    console.log('componente montado')
    return () => {
      console.log('componente foi desmontado')
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            names.map((name, idx) => <li key={idx}>{name}</li>)
          }
        </ul>
        <button
          onClick={() => {
            setNames([...names, 'jeremias'])
          }}
        >
          adicionar jeremias
        </button>
      </header>
    </div >
  );
}

export default App;
