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

  def create
    comment = Comment.new(content: params['content'], commentator: params['commentator'], gameID: params['gameID'])
    if comment.save
      render json: comment, status: :accepted
    else
      render json: {errors: comment.errors.full_messages}, status: :unprocessible_entity
    end
  end
  
end
