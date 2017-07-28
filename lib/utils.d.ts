export declare function enable(gl: WebGLRenderingContext, fs: number[], callback: () => void): void;
export declare function bind(bs: Bindable[], callback: () => void): void;
export declare function addLineNumber(body: string): string;
export declare function nonNull<T1, T2>(v: T1): T2;
export interface Bindable {
    bind(): void;
    unbind(): void;
}
