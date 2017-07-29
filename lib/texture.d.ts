export declare type ImageLike = HTMLImageElement | HTMLCanvasElement | ImageData;
export declare class Texture {
    private gl;
    private name;
    constructor(gl: WebGLRenderingContext);
    release(): void;
    bind(cb: () => void): void;
    setImage(img: ImageLike): void;
}
