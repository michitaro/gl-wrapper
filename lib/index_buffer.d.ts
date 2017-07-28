import * as glUtils from './utils';
export interface DataOption {
    usage?: number;
    array: Int16Array;
}
export declare class IndexBuffer implements glUtils.Bindable {
    private gl;
    private name;
    private usage;
    private length;
    constructor(gl: WebGLRenderingContext, dataOption?: DataOption);
    release(): void;
    bind(): void;
    unbind(): void;
    setData({usage, array}: DataOption): void;
}
