Rails.application.routes.draw do
  resources :organizers
  resources :customers
  resources :customer_events
  resources :events

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get '/me', to: 'organizers#show'
end
