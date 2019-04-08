class Shot < ActiveRecord::Base
	belongs_to :user
  attr_accessor :impact_to_target_distance, :hit_target, :muzzle_speed, :shot_angle, :shell_weight, :cannon_to_target_distance, :size_of_target, :user_id

	# http://www.softschools.com/formulas/physics/horizontal_range_formula/154/

	def plot_trajectory
		valid_hit_range = (self.cannon_to_target_distance)..(self.size_of_target + self.cannon_to_target_distance)
		distance_traveled = ((self.muzzle_speed ** 2) * Math.sin(self.shot_angle * 2)) / 9.8
		
		if valid_hit_range.include?(distance_traveled)
			self.impact_to_target_distance = 0
			self.hit_target = true
		else
			self.impact_to_target_distance = (distance_traveled - self.cannon_to_target_distance).abs
			self.hit_target = false
		end
	end
end
