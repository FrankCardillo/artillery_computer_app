Rails.application.routes.draw do
  root to: "pages#root"
  get '*path', to: 'pages#root'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :shots
    end
  end
end
