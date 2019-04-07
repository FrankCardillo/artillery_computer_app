class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_agent
      t.integer :rank
      t.float :general_accuracy
      t.integer :latitude
      t.integer :longitude
      t.timestamps
    end
  end
end
