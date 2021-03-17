class Comment < ApplicationRecord
  belongs_to :game, optional: true
end
