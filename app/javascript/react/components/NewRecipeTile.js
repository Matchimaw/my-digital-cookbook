import React from 'react'
import Recipes from '../../../assets/images/recipes.png'

const NewRecipeTile = () => {
  return (
    <div className="cell small-6 medium-4">
      <a href="/recipes/new">
        <div className="card recipe-card">
          <img className="new-recipes" src={Recipes} alt="recipe image"/>
          <div className="card-section recipe-card-section">
            <h4>Add Your New Recipe</h4>
          </div>
        </div>
      </a>
    </div>
  )
}

export default NewRecipeTile