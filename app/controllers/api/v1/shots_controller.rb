module Api::V1
  class ShotsController < ApplicationController
    def index
      @shots = Shot.all.order(user_id: :desc)
    end
  
    def new
      @shot = Shot.new
      # need params from front end
    end
  
    def create
    end
  end  
end