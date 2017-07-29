export interface DataOption {
    usage?: number;
    array: Int16Array;
}
export declare class IndexBuffer {
    private gl;
    private name;
    private usage;
    private length;
    constructor(gl: WebGLRenderingContext, dataOption?: DataOption);
    release(): void;
    bind(cb: () => void): void;
    setData({usage, array}: DataOption): void;
}
