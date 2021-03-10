class AddGameToComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :comments, :game, foreign_key: true
  end
end
