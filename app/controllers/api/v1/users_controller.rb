module Api::V1
  class UsersController < ApplicationController
  
    def index
      @users = User.order(:id)
  
      render json: @users
    end
  
    def show
      render json: @user
    end
  
    def create
      @user = User.create(params[:user])
      
      if @user
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    private
      def user_params
        params.require(:user).permit(:user_agent, :latitude, :longitude, :rank, :general_accuracy)
      end
  end
end