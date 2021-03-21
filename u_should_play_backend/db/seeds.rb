# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Game.destroy_all
# Comment.destroy_all

red = Game.create(title: "Red Dead Redemption II", image: "https://media.rockstargames.com/rockstargames-newsite/uploads/d5c7e4dcecb612368aee64978f183250b6e643fe.jpg", review: "Lagging Gran Turismo save point The Legend of Zelda: Majora's Mask PlayStation Vita Halo 2 Halo: Combat Evolved checkpoint AAA non-player character PlayStation Portable assist Die-and-Retry. Combo QTE controller rapid-fire rumble pack whale HP split-screen multiplayer Monster Hunter. Mass Effect 2 Metal Gear Solid V: The Phantom Pain bug kick action farming animation cancel first-person character design Metal Gear. Devil May Cry assault mode Baldur's Gate console GoldenEye 007 rekt NPC crowd control emulator anime underpowered track-ball.")
last = Game.create(title: "The Last Of Us", image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2716/JgIondlqViKdq8sTE1HhKTRF.png", review: "Griefing point of no return esp cheats Super Mario Galaxy FOV continue animatic Deathmatch. Wii U broken respawn PvE multiplayer online battle arena paddle beta game engine Perfect Dark. Overlay Glory Seeking Madden pre-firing FPS A Grand Theft Auto: San Andreas rapid-fire Red Dead Redemption PSP grinding. Sprite Platformer combo Call of Duty: Modern Warfare 2 Crash Bandicoot The Legend of Zelda: Majora's Mask Halo Halo: Combat Evolved.")
furi = Game.create(title: "Furi", image: "https://image.api.playstation.com/cdn/UP0774/CUSA04917_00/wZuv4XLLAvSZarL9c3hFTiqlL7FNoH2L.png", review: "Computer graphics resolution Driving Game Action game The Last of Us real time first-person Mortal Kombat underpowered map. Bullshot spoiler Borderlands Game Boy animatic construction and management simulation time attack OP Platformer Adventure game keypad flip-screen. MLG action feeding class gamer metroidvania Xbox One God of War aggro RTS lagger easter eggs. Pre-rendered graphics BioShock anti-aliasing bonus stage action point PlayStation3 remorting. Spyro 1up bug Nintendo 3DS turbo D-Pad bonus PlayStation Vita The Legend of Zelda: Ocarina of Time. MMO faceroll dual wield multi-tap QQ influencer marketing AFK. Shoulder buttons Final Fantasy Hit Points (HP) mana Mass Effect 2 auto battler Gran Turismo Wii U.")

Comment.create(content: "Draw distance bug cheat code Game Boy Advance shoulder buttons drop-out role-playing video game.", commentator: "ThatRedDeadGuuuuuy", game_id: red.id)
Comment.create(content: "Ambient occlusion ÜberCharge Konami code DRM pause metroidvania NPC faceroll Nintendo 64 resolution demo accelerometer LoL.", commentator: "TLOUNumber1Fan", game_id: last.id)
Comment.create(content: "MMORPG Nintendo 3DS The Legend of Zelda: Collector's Edition beastiary Rayman Beat 'em up screen cheat demo gamer beta.", commentator: "IamfurI", game_id: furi.id)
Comment.create(content: "Mario cheats Hot Coffee mode real time Metroid Prime shovelware Tony Hawk's exploit controller.", commentator: "ThatRedDeadGuuuuuy", game_id: red.id)
Comment.create(content: "Tetris time attack NBA Live boss quickscope smart bomb Sega Genesis.", commentator: "TLOUNumber1Fan", game_id: last.id)
Comment.create(content: "Casual Flying Simulator Mega Man Bullet Hell AI The Witcher class Platform Game Pwn.", commentator: "IamfurI", game_id: furi.id)