require 'rails_helper'

describe Shot do 
	describe 'When testing the Shot class' do 
		it 'is valid when passed correct parameters' do
			fake_user = User.new('fake user agent', 1, 2)
			validShot = Shot.new(1, 1, 1, 1, 1, fake_user)
			
			expect(validShot).to be_instance_of(Shot)
		end

		it 'is invalid when passed incorrect parameters' do
			expect {Shot.new(1, 1)}.to raise_error
		end
	end
end