class GamesController < ApplicationController

  def index
binding.pry
    games = Game.all
    render json: games.to_json(
      only: [ :title, :image, :review ], 
      include: [ 
        comments: { 
          only: [ :content, :commentator ]
    }])
  end

  def create
binding.pry
    game = Game.new(game_params)
    if game.save #if game saves successfully
      render json: game, status: :accepted #show render of game
    else #if not
      render json: {errors: game.errors.full_messages}, status: :unprocessible_entity #show error to front end
    end
  end



  private

  def game_params
    params.require(:game).permit(:title, :image, :review)
  end

end
