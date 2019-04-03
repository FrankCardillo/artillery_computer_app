class Shots < ActiveRecord::Migration[5.2]
  def up
    create_table :Shots do |t|
      t.string :user_agent
      t.float :muzzle_speed
      t.float :shot_angle
      t.integer :shell_weight
      t.integer :cannon_to_target_distance
      t.float :impact_to_target_distance
      t.boolean :hit_target
      # product of multiplying its l*w. always a square target
      t.integer :size_of_target
      t.timestamps
      t.integer :user_id
    end
  end
  def def down 
    drop_table :Shots
  end
end
