class AddIdToAuthor < ActiveRecord::Migration
  def change
    add_column :authors, :id, :integer
  end
end
