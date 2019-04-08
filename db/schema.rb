# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_07_182313) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "shots", force: :cascade do |t|
    t.float "muzzle_speed"
    t.float "shot_angle"
    t.integer "shell_weight"
    t.integer "cannon_to_target_distance"
    t.float "impact_to_target_distance"
    t.boolean "hit_target"
    t.integer "size_of_target"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_agent"
    t.integer "rank"
    t.float "general_accuracy"
    t.integer "latitude"
    t.integer "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
