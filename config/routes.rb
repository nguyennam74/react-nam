Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :post
  resources :demo do
    get 'contact',  on: :member
  end
end
