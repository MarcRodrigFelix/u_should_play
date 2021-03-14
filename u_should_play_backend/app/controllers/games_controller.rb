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

  def update
    game = Game.find_by(id: params[:id])
    game.update(
      title: params[:title],
      image: params[:image],
      review: params[:review]
     )

    if game.save
      render json: game
    else
      render json: game.errors
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
