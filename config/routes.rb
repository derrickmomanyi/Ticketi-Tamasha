Rails.application.routes.draw do
  resources :organizers
  resources :customers
  resources :customer_events
  resources :organizer_events
  resources :events
  resources :drafts
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get '/me', to: 'organizers#show'
  get '/customers/:id/events', to: 'customers#customer_favourites'
  get 'customers/:id/purchased', to: 'customers#purchased_events'
  get '/organizers/:id/events', to: 'organizers#my_events'
  get '/organizers/:id/drafts', to: 'organizers#organizer_drafts'
  get '/customers', to: 'customers#index'
  get '/customers/:id', to: 'customers#show'
  get '/organizers/:id', to: 'organizers#show'
  post 'stkpush', to: 'mpesas#stkpush'
  post 'stkquery', to: 'mpesas#stkquery'
end
