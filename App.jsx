import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

//import individual pages
import Navigation from "./components/navigation/Navigation";//log in info
import Landing from "./routes/landing/Landing"; //home page
import Footer from "./components/footer/Footer"; //footer information
import Search_All_Restaurants from "./routes/search/All_Restaurants";//Search Page for resaurants, and a Google Maps Places API, info windows, and user location
import Fast_Food from "./routes/search/Fast_Food";
import Fine_Dining from "./routes/search/Fine_Dining";
import Cafe from "./routes/search/Cafe";
import Bakery from "./routes/search/Bakery";
import SignIn from "./routes/sign-in/SignIn";
import SignUp from "./routes/sign-up/SignUp";
import Profile from "./routes/user-profile/Profile";//include restaurants visited and reviewed
import NotFound from "./components/NotFound";


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ id: '', createdTime: '', email: '', fullname: '', gender: '', plan: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false);
  const [triggeredLogout, setTriggeredLogout] = useState(false);

  return (
    <Router>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} />
      <Routes>
        <Route path="/" element={<Landing loggedIn={loggedIn} />} />
        <Route path="/search_restaurants" element={<Search_All_Restaurants />} >
          <Route path="/fast_food" element={<Fast_Food/>}/>
          <Route path='/fine_dining' element={<Fine_Dining/>}/>
          <Route path='/cafe' element={<Cafe/>}/>
          <Route path='/bakery' element={<Bakery/>}/>
        </Route>
        <Route path="/sign-in" element={loggedIn ? <Profile retrieveDatabase={retrieveDatabase} user={user} updateUser={updateUser} deleteUser={deleteUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <SignIn retrieveDatabase={retrieveDatabase} user={user} setLoggedIn={setLoggedIn} />} />
        <Route path="/sign-up" element={loggedIn ? <Profile retrieveDatabase={retrieveDatabase} user={user} updateUser={updateUser} deleteUser={deleteUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <SignUp retrieveDatabase={retrieveDatabase} user={user} registerUser={registerUser} />} />
        <Route path="/profile" element={loggedIn ? <Profile retrieveDatabase={retrieveDatabase} user={user} updateUser={updateUser} deleteUser={deleteUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>

    /*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/
  )
}

export default App
