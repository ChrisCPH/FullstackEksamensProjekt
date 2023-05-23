import './css/App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import GameTable from './components/GameTable'
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Link, Route, Routes, } from "react-router-dom";
import RatingTable from './components/RatingTable';
import UserTable from './components/UserTable';


function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/games" element={<GameTable />} />
                <Route path="/ratings" element={<RatingTable />} />
                <Route path="/users" element={<UserTable />} />
              </Routes>
        </div>
      </div>
    </BrowserRouter>
  </ApolloProvider>
  )
}

export default App
