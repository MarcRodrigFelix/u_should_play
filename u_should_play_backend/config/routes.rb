Rails.application.routes.draw do
  # get 'games/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # FOR NAMESPACING IF YOU WANT:
  # namespace :api do
  #   namespace :v1 do
  #   end
  # end

  resources :games
  resources :comments, only: [ :index, :show, :new ]
  # , only: [ :index, :create, :update ]

  

end
