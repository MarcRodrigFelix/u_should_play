# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.destroy_all
Comment.destroy_all

red = Game.create(title: "Red Dead Redemption II", image: "https://media.rockstargames.com/rockstargames-newsite/uploads/d5c7e4dcecb612368aee64978f183250b6e643fe.jpg", review: "Objectively (based on general consensus) I would say no, Red Dead Redemption 2 is not a bad game, in fact, it is one of the best. Red Dead features one of the largest open-world maps to date, and can also be played in first- or third-person just like GTA V. However, that doesn't mean everybody will enjoy it.")
last = Game.create(title: "The Last Of Us", image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2716/JgIondlqViKdq8sTE1HhKTRF.png", review: "The Last of Us 2 is a game that demands conflicted feelings. It engenders adoration for the brilliant graphics, compelling acting, and substantial gameplay. But the story made me feel utterly miserable, even if I really admire it.")
furi = Game.create(title: "Furi", image: "https://image.api.playstation.com/cdn/UP0774/CUSA04917_00/wZuv4XLLAvSZarL9c3hFTiqlL7FNoH2L.png", review: "It's very hard but fair, which is good since bosses are the only thing in the game. I love this game but I do recommend playing it on PC for stable 60 FPS. ")

Comment.create(content: "This game was so awesome I practically lived in it for weeks.", commentator: "ThatRedDeadGuuuuuy", game_id: red.id)
Comment.create(content: "Very emotional game but, I agree. This is a must play.", commentator: "TLOUNumber1Fan", game_id: last.id)
Comment.create(content: "One of the funnest indie games ever! Non stop action.", commentator: "IamfurI", game_id: furi.id)