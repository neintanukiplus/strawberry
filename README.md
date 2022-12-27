## Table of Contents
- [About "Strawberry"](#what-is-strawberry)
- [Roadmap Status](#roadmap-status)
- [Installation](#installation)

## What is "Strawberry"?
"Strawberry" is an ongoing project that aims to provide a virtual environment for video conferencing.

## Roadmap Status
- [x] Developer key integration
- [ ] Developer Dashboard
- [ ] Local Audio/Video Track
- [ ] Tilemap
- [ ] Multiplayer
- [ ] Proximity Audio/Video
- [ ] Breakout Rooms
- [ ] Global Chat and Private Chat

## Installation
**Install NodeJS and Git** <br />
Download NodeJS from their official [website](https://nodejs.org/en/) <br />
Download [Git](https://git-scm.com/downloads)

**Clone this repo** <br />

**Install dependencies** <br />
```shell
npm install
cd ./client && npm install
```

**Create .env file based on the .env.sample** <br />

**Note:** The values set on the .env.sample is just a template. Please provide your own values.
```
touch .env
```

**Run the development server** <br />
To run the client:
```
npm run client
```

To run the server:
```
npm run start:dev
```

To run both client and server **(Recommended)**:
```
npm run dev
```