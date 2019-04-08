require 'rails_helper'

describe Shot do 
	describe 'When testing the Shot class' do
		it 'is valid' do
			valid_shot = Shot.new
			
			expect(valid_shot).to be_instance_of(Shot)
		end
	end

	describe '#plot_trajectory' do
		it 'marks the shot as hit' do
			bulls_eye = Shot.new
			
			bulls_eye.cannon_to_target_distance = 230
			bulls_eye.size_of_target = 7
			bulls_eye.muzzle_speed = 50
			bulls_eye.shot_angle = 23

			bulls_eye.plot_trajectory()

			expect(bulls_eye.hit_target).to be true
			expect(bulls_eye.impact_to_target_distance).to eq(0)
		end

		it 'marks the shot as missed and updates the impact distance from target' do
			missed_shot = Shot.new
			
			missed_shot.cannon_to_target_distance = 100
			missed_shot.size_of_target = 7
			missed_shot.muzzle_speed = 50
			missed_shot.shot_angle = 23

			missed_shot.plot_trajectory()

			expect(missed_shot.hit_target).to be false
			expect(missed_shot.impact_to_target_distance.floor).to eq(130)
		end
	end
end