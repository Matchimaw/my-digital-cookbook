class RecipeShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo_path, :prepTime, :totalTime, :ingredient, :instruction, :current_user

end