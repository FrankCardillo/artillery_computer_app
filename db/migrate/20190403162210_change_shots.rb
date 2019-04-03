class ChangeShots < ActiveRecord::Migration[5.2]
  def change
    remove_column :Shots, :user_agent
  end
end
