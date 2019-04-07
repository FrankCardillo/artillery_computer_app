require 'rails_helper'

describe User do 
	describe 'When testing the User class' do
		it 'is valid when passed correct parameters' do
			valid_user = User.new
			valid_user.user_agent = "fake user agent"
			valid_user.latitude = 1
			valid_user.longitude = 2
			valid_user.rank = 15
			expect(valid_user).to be_instance_of(User)
		end
	end

	describe '#calculate_accuracy' do
		let(:valid_user) { User.new }
		let(:shot1) { Shot.new }
		let(:shot2) { Shot.new }
		let(:shot3) { Shot.new }
		let(:fake_shots) { [shot1, shot2, shot3] }
		
		it 'calculates the correct accuracy' do
			valid_user.shots << shot1
			valid_user.shots << shot2
			valid_user.shots << shot3

			fake_shots.each do |shot|
				shot.muzzle_speed = 1
				shot.shot_angle = 1
				shot.cannon_to_target_distance = 1
				shot.size_of_target = 6
				shot.hit_target = false
				shot.impact_to_target_distance = 40
			end

			expect(valid_user.calculate_accuracy).to eq(60)
		end

		it 'is no lower than zero' do
			valid_user.shots << shot1
			valid_user.shots << shot2
			valid_user.shots << shot3

			fake_shots.each do |shot|
				shot.muzzle_speed = 1
				shot.shot_angle = 1
				shot.cannon_to_target_distance = 1
				shot.size_of_target = 6
				shot.hit_target = false
				shot.impact_to_target_distance = 4000
			end

			expect(valid_user.calculate_accuracy).to eq(0)
		end
	end
end