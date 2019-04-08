module Api::V1
  class ShotsController < ApplicationController
  
    def index
      @shots = Shot.order(:id)
  
      render json: @shots
    end
  
    def show
      render json: @shot
    end
  
    def create
      @shot = Shot.create(params[:shot])
      
      if @shot
        render json: @shot, status: :created
      else
        render json: @shot.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @shot.update(shot_params)
        render json: @shot
      else
        render json: @shot.errors, status: :unprocessable_entity
      end
    end
  
    private
      def shot_params
        params.require(:shot).permit(:impact_to_target_distance, :hit_target, :muzzle_speed, :shot_angle, :shell_weight, :cannon_to_target_distance, :size_of_target, :user_id)
      end
  end
end