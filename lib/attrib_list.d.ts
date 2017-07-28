import { Program } from './program';
export interface Member {
    name: string;
    dataType?: number;
    normalize?: boolean;
    nComponents: number;
}
export declare type TypedArray = Float32Array;
export declare type DataOption = {
    members?: Member[];
    array?: TypedArray;
    usage?: number;
};
export declare class AttribList {
    private gl;
    private bufferName;
    private stride;
    private offset;
    private members;
    vertexCount: number;
    constructor(gl: WebGLRenderingContext, data?: DataOption);
    release(): void;
    setData({members, array, usage}: DataOption): void;
    enable(program: Program, f: () => void): void;
}
