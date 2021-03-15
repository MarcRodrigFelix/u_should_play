class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments.to_json(
      only: [ :content, :commentator, :game_id ],
      include: [ game: { only: [ :title, :image, :review, :id ]} ])
  end

  def show
    comment = Comment.find_by(id: params[:id])
    game = Game.find_by(id: comment.game_id)
    render json: game
  end

end
