class GamesController < ApplicationController

  def index
    games = Game.all
    render json: games
  end

  def create
    game = Game.new(game_params)
    if game.save
      render json: game, status: :accepted
    else
      render json: {errors: game.errors.full_messages}, status: :unprocessible_entity
    end
  end


  def destroy
    Game.find(params[:id]).destroy
  end


  private

  def game_params
    params.require(:game).permit(:title, :image, :review)
  end

end
