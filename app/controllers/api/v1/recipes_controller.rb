class Api::V1::RecipesController  < ApiController

  def index
    render json: Recipe.all
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe, serializer: RecipeShowSerializer
  end
end

