import {Assets, Application, Sprite} from "pixi.js";



const app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});


document.body.appendChild(app.view);

let dungeon, explorer, treasure, door;

// Helper function - useful to remember
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

// Load Assets
Assets.load([
    "images/treasureHunter.json"
]).then(() => {
    dungeon = Sprite.from("dungeon.png");
    app.stage.addChild(dungeon);

    explorer = Sprite.from("explorer.png");
    explorer.x = 68;
    explorer.y = app.stage.height / 2 - explorer.height / 2;
    app.stage.addChild(explorer);

    treasure = Sprite.from("treasure.png");
    treasure.x = app.stage.width - treasure.width - 48;
    treasure.y = app.stage.height / 2;
    app.stage.addChild(treasure);

    door = Sprite.from("door.png");
    door.position.set(32, 0);
    app.stage.addChild(door);

    const numberOfBlobs = 6;
    const spacing = 48;
    const xOffset = 150;

    for (let i = 0; i < numberOfBlobs; i++) {

        // Make a blob
        const blob = Sprite.from("blob.png");

        const x = spacing * i + xOffset;

        const y = randomInt(0, app.stage.height - blob.height);

        blob.x = x;
        blob.y = y;

        app.stage.addChild(blob);

    }


});
