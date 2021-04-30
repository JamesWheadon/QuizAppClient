# Quizards

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Quizards is an online quiz game  which uses OpenTrivia API for fetching the questions. Users can join a room  with a name and room code, then create a game. (5 players max). Users can select the difficulty, category and number of questions. At the end of each quiz users are sent to a leaderboards page displaying their score.


### Installation

-   Clone or download this repo

### Usage

-   Navigate to root directory of this repository
-   Ensure docker is running
-  Open the terminal and run `bash _scripts/startDev.sh` to start  app
-   then run the following commands in the terminal: 
    - `cd client`
    - `npm install`
    - `npm run dev`
-   Run `bash _scripts/teardown.sh` to stop and teardown the containers


## Technologies

-   Client side: React, CSS 
    -   Dependencies: react, react-redux, react-router-dom, react-dom, axios, redux-devtools-extension, redux-thunk.
-   Server side: Node.js
    -   Dependencies:  express, pg, jest, nodemon, socket.io, socket.io-client,

## Process

1. Initial planning done using the MoSCoW method and created source of truth doc.
2. created GitHub project board to split up the required tasks.
3. App design done using Figma
4. Daily stand ups to discuss and assign tasks.
 

## Wins & Challenges

### Wins

-   Well designed app that’s responsive on desktop, mobile and tablet devices
-   Implemented Sockets to handle multiple players.


### Challenges

-   
-    

## Bugs

-  

## Future Features

-   

## Licence

-   MIT

### The Team

[Rishi B](https://github.com/theduckfliesagain), [emmanuel-sobamowo](https://github.com/emmanuel-sobamowo), [JamesWheadon](https://github.com/JamesWheadon), [FaisalY12](https://github.com/FaisalY12)
