class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :photo_path
      t.string :prepTime, null: false
      t.string :totalTime, null: false
      t.text :ingredient, null: false
      t.text :instruction, null: false

      t.timestamps null: false
    end
  end
end
