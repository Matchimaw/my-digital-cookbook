import React from 'react'
import MysteryRecipe from '../../../assets/images/mystery-recipe.png'
import {Link} from 'react-router-dom'

const RecipeTile = (props) => {
  let recipeImg
  if(props.photo === null){
    recipeImg = <img className="recipe-card-image" src={MysteryRecipe}/>
  } else {
    recipeImg = <img className="recipe-card-image" src={props.photo}/>
  }

  return (
    <div className="cell small-3 medium-3">
      <Link to={`/recipes/${props.id}`}>
        <div className="card recipe-card">
          {recipeImg}
          <div className="card-section recipe-card-section">
            <h5>{props.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecipeTile