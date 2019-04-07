require 'rails_helper'

describe User do 
	describe 'When testing the User class' do
		let(:valid_user) { User.new('fake user agent', 1, 2) }

		it 'is valid when passed correct parameters' do
			expect(valid_user).to be_instance_of(User)
		end

		it 'is invalid when passed incorrect parameters' do
			expect { User.new(1, 1) }.to raise_error
		end

		it 'is valid when passed no coordinates' do
			valid_user = User.new('fake user agent')
			expect(valid_user).to be_instance_of(User)
		end
	end

	describe '#calculate_accuracy' do
		let(:valid_user) { User.new('fake user agent', 1, 2) }
		let(:fake_shots) { [Shot.new(1, 1, 1, 100, 6, valid_user), Shot.new(1, 1, 1, 100, 6, valid_user), Shot.new(1, 1, 1, 100, 6, valid_user)] }
		
		it 'should calculate the correct accuracy' do
			fake_shots.each do |shot|
				shot.impact_to_target_distance = 40
			end

			expect(valid_user.calculate_accuracy).to eq(40)
		end

		it 'should be no lower than zero' do
			fake_shots.each do |shot|
				shot.impact_to_target_distance = 4000
			end

			expect(valid_user.calculate_accuracy).to eq(0)
		end
	end
end