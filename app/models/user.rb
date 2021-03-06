class User < ActiveRecord::Base
	has_many :shots

  attr_accessor :user_agent, :latitude, :longitude, :rank, :general_accuracy
	
	def calculate_accuracy
		number_of_shots = self.shots.size
		score = 0
		shots_hit = self.shots.where(hit_target: true).size
		score += (100 * shots_hit)

		self.shots.each do |shot|
      if shot.hit_target == false
			  missed_score = (100 - shot.impact_to_target_distance)
        score += missed_score
      else
        score += 100
      end
		end

		if score <= 0
			self.general_accuracy = 0
		else
			self.general_accuracy = (score / number_of_shots)
		end
	end
end
