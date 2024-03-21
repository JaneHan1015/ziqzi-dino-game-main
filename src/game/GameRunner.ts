export default class GameRunner {
    looping: boolean;
    preloaded: boolean;
    paused: boolean;

    targetFrameRate: number;
    frameRate: number;
    frameCount: number;
    stepFrames: number | null;
    private _lastFrameTime;

    __loop: any;

    constructor() {
        this.looping = false;
        this.preloaded = false;
        this.paused = false;
        this.targetFrameRate = 60;
        this.frameRate = 0;
        this.frameCount = 0;
        this.stepFrames = null;
        this._lastFrameTime = window.performance.now();
        this.__loop = this.__loop.bind(this);
    }

    start(paused) {
        if (!this.preloaded) {
            this.preload();
            this.preloaded = true;
        }
        this.paused = paused;
        this.looping = true;
        if (!paused) {
            window.requestAnimationFrame(this.__loop)
        }
    }
    preload() {
        console.log("Must be implemented");
    }

    stop() {
        this.looping = false;
    }

    pause() {
        this.looping = false;
    }

    unpause() {
        this.paused = false;
    }

    step(frames = 1) {
        if (this.stepFrames) {
            this.stepFrames += frames;
        }
    } else {
        this.stepFrames = frames;
    }

    this.__loop();


    _loop(timestamp: number) {
        const now = window.performance.now();
        const timeSinceLast = now  - this._lastFrametimeRate;
        const Target

        //last 7 min
    }
}