class CreateShots < ActiveRecord::Migration[5.2]
  def change
    create_table :shots do |t|
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
end
