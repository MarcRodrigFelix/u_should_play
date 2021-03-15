class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :commentator, :game_id
  belongs_to :game
end
