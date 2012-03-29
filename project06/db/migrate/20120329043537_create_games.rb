class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :rating
      t.string :date_added

      t.timestamps
    end
  end
end
