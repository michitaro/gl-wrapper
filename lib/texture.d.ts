import * as glUtils from './utils';
export declare type ImageLike = HTMLImageElement | HTMLCanvasElement | ImageData;
export declare class Texture implements glUtils.Bindable {
    private gl;
    private name;
    constructor(gl: WebGLRenderingContext);
    release(): void;
    bind(): void;
    unbind(): void;
    setImage(img: ImageLike): void;
}
