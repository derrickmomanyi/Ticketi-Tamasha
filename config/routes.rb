Rails.application.routes.draw do
  resources :organizers
  resources :customers
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get '/me', to: 'organizers#show'
end
