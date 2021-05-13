import React, { useState, useEffect } from "react"
import RecipeTile from "./RecipeTile"

const RecipeCollection = props =>  {

  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => {
    try {
      const response = await fetch("/api/v1/recipes")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }   
      const responseBody = await response.json()
      setRecipes(responseBody)
    } catch (err) {
      console.error("Error in fetch!")
      console.error(err)
    }
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  const recipeList = recipes.map(recipe => {
    return (
      <RecipeTile
        key={recipe.id}
        id={recipe.id}
        name={recipe.name}
        photo={recipe.photo_path.url}
        prepTime={recipe.prepTime}
        totalTime={recipe.totalTime}
        ingredient={recipe.ingredient}
        instruction={recipe.instruction}
      />
    )
  })

  return (
    <div className="grid-x grid-margin-x">
      {recipeList}
    </div> 
  )
}

export default RecipeCollection