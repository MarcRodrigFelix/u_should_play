class GamesController < ApplicationController

  def index
    game = Game.all
    render json: game.to_json(
      only: [ :title, :image, :review ], 
      include: [ 
        comments: { 
          only: [ :content, :commentator ]
    }])
  end

end
