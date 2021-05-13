import React, { useState, useEffect } from "react"
import MysteryRecipe from '../../../assets/images/mystery-recipe.png'

const RecipeShow = props => {
  
  const [recipe, setRecipe] = useState({
    name: "",
    photo_path: "",
    prepTime: "",
    totalTme: "",
    ingredient: "",
    instruction: ""
  })

  const fetchRecipe = async () => {
    try {
      let recipeId = props.match.params.id
      const response = await fetch(`/api/v1/recipes/${recipeId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }

      const responseBody = await response.json()
      setRecipe(
        responseBody)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchRecipe()
  }, [])

  let recipeImg
  if(recipe.photo_path.url === null){
    recipeImg = <img className="recipe-photo" src={MysteryRecipe}/>
  } else {
    recipeImg = <img className="recipe-photo" src={recipe.photo_path.url}/>
  }

  const ingredientStr = recipe.ingredient
  const ingredientArr = ingredientStr.split(',')
  let ingredientList = ingredientArr.map(function (ingredient) {
    return <li> {ingredient} </li>;
  });

  const instructionStr = recipe.instruction
  const instructionArr = instructionStr.split(',')
  let instructionList = instructionArr.map(function (instruction) {
    return <li> {instruction} </li>;
  });

  return (
    <div className="grid-container">

          {recipeImg}
          <h2>{recipe.name}</h2>
          <p>Prep Time: {recipe.prepTime}</p>
          <p>Total Time: {recipe.totalTime}</p>
          <h4>Ingredient:</h4> 
          {ingredientList}
          <h4>Instruction:</h4>
          {instructionList}

    </div>
  )
}

export default RecipeShow