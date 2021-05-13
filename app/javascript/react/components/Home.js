import React from "react"
import Recipes from '../../../assets/images/recipes.png'
import RecipeCollection from "./RecipeCollection"

const Home = props => {
  return(
    <div className="grid-container">
      <div className="grid-x grid-padding-x grid-padding-y grid-margin-x align-middle align-center">
        <div className="cell medium-4 text-center">
          <img src={Recipes}/>
        </div>
          <div className="cell auto callout-purple">
          <div className="grid-x align-center align-bottom">
            <h2>Welcome to Cookbook!</h2>
            <h3>Create all your favorite recipes</h3>
            <div className="cell medium-6">
              <a href="/recipes/new">
              <div className="add-button">Add Your New Recipe</div>
              </a>
            </div>
          </div>
          </div>
      </div>
            <RecipeCollection />
    </div> 
  )
}

export default Home