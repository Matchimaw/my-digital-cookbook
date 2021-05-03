class Api::V1::RecipesController  < ApiController

  def index
    render json: Recipe.all
  end

end