class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :prepTime, null: false
      t.text :ingredients, null: false
      t.text :instructions, null: false
      t.string :photo_path

      t.timestamps null: false
    end
  end
end
