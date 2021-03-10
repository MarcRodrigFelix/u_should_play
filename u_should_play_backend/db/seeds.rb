# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.destroy_all
Comment.destroy_all

red = Game.create(title: "Red Dead Redemption II")
last = Game.create(title: "The Last Of Us")
furi = Game.create(title: "Furi")

Comment.create(content: "This game was so awesome I practically lived in it for weeks.", commentator: "ThatRedDeadGuuuuuy", game_id: red.id)
Comment.create(content: "Very emotional game but, I agree. This is a must play.", commentator: "TLOUNumber1Fan", game_id: last.id)
Comment.create(content: "One of the funnest indie games ever! Non stop action.", commentator: "IamfurI", game_id: furi.id)