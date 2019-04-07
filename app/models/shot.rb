class Shot < ActiveRecord::Base
    belongs_to :user
    attr_accessor :impact_to_target_distance, :hit_target, :muzzle_speed, :shot_angle, :shell_weight, :cannon_to_target_distance, :size_of_target, :user
end
