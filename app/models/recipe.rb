class Recipe < ApplicationRecord
  validates :name, presence: true
  validates :prepTime, presence: true
  validates :totalTime, presence: true
  validates :ingredient, presence: true
  validates :instruction, presence: true
  
  mount_uploader :photo_path, PhotoUploader

end