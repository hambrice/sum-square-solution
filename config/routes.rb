Rails.application.routes.draw do
  resources :difference, only: [:index], :controller => "inputs"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
