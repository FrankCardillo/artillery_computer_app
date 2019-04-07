require 'rails_helper'

describe Shot do 
	describe 'When testing the Shot class' do 
		it 'is valid' do
			validShot = Shot.new
			
			expect(validShot).to be_instance_of(Shot)
		end
	end
end