import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Home"
import RecipeShow from "./RecipeShow"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/recipes/:id" component={RecipeShow}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}
export default App