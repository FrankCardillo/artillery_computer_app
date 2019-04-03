class User < ActiveRecord::Base
	has_many :shots

  attr_reader :user_agent, :latitude, :longitude
  attr_accessor :rank, :general_accuracy

	def initialize(user_agent, latitude=nil, longitude=nil)
    @user_agent = user_agent
    @latitude = latitude
    @longitude = longitude
		@rank = nil
		@general_accuracy = nil
	end
	
	def calculate_accuracy
		number_of_shots = self.shots.size
		score = 0
		shots_hit = self.shots.where(hit_target: true).size
		score += (100 * shots_hit)

		self.shots.where(hit_target: false).each do |shot|
			missed_score = (100 - shot.impact_to_target_distance)
			score += missed_score
		end

		if score <= 0
			self.general_accuracy = 0
		else
			self.general_accuracy = (score / number_of_shots)
		end
	end
end
