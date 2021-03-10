class RemoveGameIdFromComments < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :game_id, :integer
  end
end
