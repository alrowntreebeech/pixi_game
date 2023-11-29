import {Assets, Application, Sprite} from "pixi.js";

const app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";

document.body.appendChild(app.view);

let dungeon, explorer, treasure, door, id;

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

    app.renderer.render(app.stage);
});
