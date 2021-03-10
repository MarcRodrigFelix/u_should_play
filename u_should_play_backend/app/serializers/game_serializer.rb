class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :review
  has_many :comments
end
