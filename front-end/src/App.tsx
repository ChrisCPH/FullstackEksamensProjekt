import { useState, useEffect } from 'react'
import './css/App.css'
import Games from './classes/Games';
import AddGameForm from './components/AddGameForm';
import GameTable from './components/GameTable'

function App() {
  
  const [games, setGames] = useState<Games[]>([]);

  const fetchGames = () => {
      return fetch('http://localhost:3001/game')
          .then(((res) => res.json()))
          .then((data) => setGames(data))
  }

  useEffect(() => {
      fetchGames();
  },[])

  return (
    <div className="container-fluid">
      <div className="row">
        <GameTable games={games} setGames={setGames} />
        <AddGameForm games={games} setGames={setGames} />
      </div>
    </div>
  )
}

export default App
