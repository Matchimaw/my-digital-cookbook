import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import RecipeIndex from "./RecipeIndex"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RecipeIndex}/>
      </Switch>
    </BrowserRouter>
  )
}
export default App