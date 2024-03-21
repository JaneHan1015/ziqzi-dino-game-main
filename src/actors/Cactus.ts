import Actor from "./Actor";

export default class Cactus extends Actor {
  speed: number;

  constructor(imageData?: ImageData) {
    super(imageData);
    this.sprite = "cactus";
    this.speed = 0;
  }
}
