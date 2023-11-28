import {Assets, Application, Sprite, Texture, Rectangle} from "pixi.js";

const app = new Application({
    resizeTo: window
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";

document.body.appendChild(app.view);


Assets.load([
    "images/tileset.png",
    "images/cat.png",
]).then(() => {
    const texture = Texture.from("images/tileset.png");
    const rectangle = new Rectangle(192, 128, 64, 64);

    texture.frame = rectangle;

    const rocket = new Sprite(texture);

    rocket.x = app.screen.width / 2;
    rocket.y = app.screen.height / 2;

    app.stage.addChild(rocket);

    app.renderer.render(app.stage);
});
