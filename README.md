# u-should-play

## Description.

Welcom to U Should Play. This is a web app for game lovers of all kind, where you can post a game you feel very proudly of and really want gamers out there to experience at least once. A game so wonderful you just can't stand by and let fellow gamers miss.

## What is U Should Play
  * Single Page Application
  * Handles JSON data
  * JavaScript with HTML/CSS frontend
  * Ruby/Rails API backend

## Add game
 * Use the top page form to add a game to our collection.

## Remove game
 * Can remove the game through game settings.

## Edit game
 * Can edit the game through game settings.

## Add comments to games
 * Add a comment to a game you like.
 * Don't require signups or logins.

## Installation
  Download repo and try locally. Clone the repo and run 
    * backend folder

    $ bundle install
  
  If required to run migration locally
    * backend folder

    $ rails db:migrate

  Run seed data for testing
    * backend folder

    $ rails db:seed

  Test data in rails console
    * backend folder
    
    $ rails console
    $ rails c

  Run local server (JSON data from Backend API)
    * backend folder

    $ rails server
    $ rails s
  
  Open html page to view Single Page Application (SPA)
    * frontend folder

    $ open index.html


## Gems Used. 
  * ruby '2.6.1'
  * rails, '~> 6.1.2', '>= 6.1.2.1'
  * sqlite3, '~> 1.4'
  * puma, '~> 5.0'
  * active_model_serializers
  * bootsnap, '>= 1.4.4', require: false
  * 'rack-cors'