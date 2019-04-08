module Api::V1
  class UsersController < ApplicationController
    def index
      @users = User.all.order(id: :desc)
    end
  
    def new
      @user = User.new
      # need params from front end
    end
  
    def create
    end
  end  
end