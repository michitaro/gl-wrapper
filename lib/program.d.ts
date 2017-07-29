import { AttribList } from './attrib_list';
import { mat4 } from 'gl-matrix';
export declare class Program {
    private gl;
    private vertSource;
    private fragSource;
    private vertShader;
    private fragShader;
    private name;
    private attribLocationMemo;
    private uniformLocationMemo;
    private refCount;
    private constructor();
    private retain();
    private static cache;
    static new(gl: WebGLRenderingContext, vertSource: string, fragSource: string): Program;
    release(): void;
    use(): void;
    attribLocation(varName: string): number;
    uniformLocation(varName: string): WebGLUniformLocation;
    enableAttribList(attribList: AttribList, callback: {
        (): void;
    }): void;
    uniformMatrix4fv(matrices: {
        [name: string]: mat4;
    }, transpose?: boolean): void;
    uniform1f(vars: {
        [name: string]: number;
    }): void;
    uniform1i(vars: {
        [name: string]: number;
    }): void;
    uniform3fv(vars: {
        [name: string]: number[];
    }): void;
    uniform4fv(vars: {
        [name: string]: number[];
    }): void;
    private createShader(source, type);
}
