class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo_path, :prepTime, :totalTime, :ingredient, :instruction
end