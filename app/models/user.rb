class User < ApplicationRecord
  validates :username, uniqueness: true, presence: true

  mount_uploader :profile_photo, PhotoUploader

  def admin?
    role == "admin"
  end
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable        
end
