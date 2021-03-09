class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.string :commentator
      t.integer :game_id

      t.timestamps
    end
  end
end
