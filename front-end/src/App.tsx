import { useState, useEffect } from 'react'
import './css/App.css'
import Game from './classes/Game';
import AddGameForm from './components/AddGameForm';
import GameTable from './components/GameTable'

function App() {
  
  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = () => {
      return fetch('http://localhost:5000/api/games')
          .then(((res) => res.json()))
          .then((data) => setGames(JSON.parse(JSON.stringify(data.games))))
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
