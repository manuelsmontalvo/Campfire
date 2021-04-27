Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  
  
  resources :likes, :except => [:update]
  resources :comments
  resources :posts
  resources :blogs
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
