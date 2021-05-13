class RecipesController < ApplicationController
  before_action :authenticate_user!

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(recipes_params)
    if @recipe.save
      flash[:success] = "Recipe added successfully"
      redirect_to "/recipes/#{@recipe.id}"
    else
      flash.now[:error] = @recipe.errors.full_messages.to_sentence
      render :new
    end
  end

  private


  def recipe_params
    params.require(:recipe).permit(:name, :photo_path, :prepTime, :totalTime, :ingredient, :instruction)
  end
end