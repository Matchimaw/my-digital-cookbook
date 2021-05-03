import React, { useState, useEffect } from "react"
import RecipeTile from "./RecipeTile"
import NewRecipeTile from "./NewRecipeTile"

const RecipeIndex = props =>  {

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
        prepTime={recipe.prepTime}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        photo={recipe.photo_path.url}
      />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell small-6 medium-8">
          <h2>Cookbooks</h2>
          <p>Create all your favorite recipes</p>
        </div>
      </div>
      <div className="grid-x grid-margin-x">
        <NewRecipeTile />
        {recipeList}
      </div>
    </div>
  )
}

export default RecipeIndex 