Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  post '/toggle-post-like/:id', to: 'likes#toggle_post_like'
  post '/toggle-comment-like/:id', to: 'likes#toggle_comment_like'
  
  resources :comments, :except => [:update, :index, :show]
  resources :posts, :except => [:index]
  resources :blogs, :except => [:update] do 
    resources :post, only: [:index] 
  end
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
