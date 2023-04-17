Rails.application.routes.draw do
  resources :organizers
  resources :customers
  resources :customer_events
  resources :organizer_events
  resources :events

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get '/me', to: 'organizers#show'
  get '/customers/:id/events', to: 'customers#customer_favourites'
end
