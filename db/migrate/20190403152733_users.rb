class Users < ActiveRecord::Migration[5.2]
  def up
    create_table :Users do |t|
      t.string :user_agent
      t.integer :rank
      t.float :general_accuracy
      t.integer :latitude
      t.integer :longitude
      t.timestamps
    end
  end
  def down
    drop_table :Users
  end
end
