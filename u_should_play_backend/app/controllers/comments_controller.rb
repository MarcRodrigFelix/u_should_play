class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments.to_json(
      only: [ :content, :commentator, :game_id ],
      include: [ game: { only: [ :title, :image, :review, :id ]} ])
  end

end
