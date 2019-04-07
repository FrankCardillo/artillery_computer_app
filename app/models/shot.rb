class Shot < ActiveRecord::Base
    belongs_to :user
    attr_reader :muzzle_speed, :shot_angle, :shell_weight, :cannon_to_target_distance, :size_of_target, :user
    attr_accessor :impact_to_target_distance, :hit_target

  def initialize(muzzle_speed, shot_angle, shell_weight, cannon_to_target_distance, size_of_target, user)
    @muzzle_speed = muzzle_speed
    @shot_angle = shot_angle
    @shell_weight = shell_weight
    @cannon_to_target_distance = cannon_to_target_distance
    @size_of_target = size_of_target
    @user = user
    @impact_to_target_distance = nil
    @hit_target = false
  end

end
