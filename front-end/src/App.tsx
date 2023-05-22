import './css/App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import GameTable from './components/GameTable'
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes, } from "react-router-dom";
import RatingTable from './components/RatingTable';
import Header from './components/Header';


function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <div className="row">
            
              {/* <nav>
                <div>
                  <Link to="/">Home</Link>
                </div>
                <div>
                  <Link to="/user/:id">User</Link>
                </div>
              </nav> */}
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/games" element={<GameTable />} />
                <Route path="/ratings" element={<RatingTable />} />
              </Routes>
              {/* <div className="container-fluid">
                <div className="row">
                  {/* <GameTable games={games} setGames={setGames} />
                  <AddGameForm games={games} setGames={setGames} /> */}
                  {/* <UserContextProvider>
                <div>
                  <Login></Login>
                </div>
              </UserContextProvider>
                </div> */}
              {/* </div>  */}
        </div>
      </div>
    </BrowserRouter>
  </ApolloProvider>
  )
}

export default App
