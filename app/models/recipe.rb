class Recipe < ApplicationRecord
  validates :name, presence: true
  validates :prepTime, presence: true
  validates :ingredients, presence: true
  validates :instructions, presence: true

  mount_uploader :photo_path, PhotoUploader
end