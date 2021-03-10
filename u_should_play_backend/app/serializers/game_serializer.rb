class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :review, :comments
  # has_many :comments
end
