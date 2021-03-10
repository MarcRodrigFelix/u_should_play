class GamesController < ApplicationController

  def index
    games = Game.all
    render json: games.to_json(
      only: [ :title, :image, :review ], 
      include: [ 
        comments: { 
          only: [ :content, :commentator ]
    }])
  end

end
