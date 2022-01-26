import { useState } from "react"
import './App.css';
import Cats from  './components/Cats';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import Basket from "./components/Basket"



const App =  () => {

const [catBasket, setCatBasket] = useState([])

return(
  <div className="App">

       <Router>

        <Header catBasket={catBasket}  />
          <Switch>
        
          <Route path="/basket">
            <Basket catBasket={catBasket} setCatBasket={setCatBasket} />
          </Route>
          <Route path="/">
            <Cats catBasket={catBasket} setCatBasket={setCatBasket} />
          </Route>
          </ Switch>
      </ Router>
  </div>

)

}


// questions to ask: faker is not working and how to push header to top
// css for cat card not working
//why doI need return in the map array  react_devtools_backend.js:4045 Warning: Functions are not valid as a React child.
//why two children with the same ind
//





export default App;
