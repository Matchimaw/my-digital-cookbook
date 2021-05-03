Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/recipes', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :recipes, only: [:index] 
    end
  end
end
