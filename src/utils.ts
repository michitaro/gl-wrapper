import { sprintf } from 'sprintf-js'


export function enable(gl: WebGLRenderingContext, fs: number[], callback: () => void) {
    for (let f of fs)
        gl.enable(f)
    callback()
    for (let f of fs)
        gl.disable(f)
}


export function addLineNumber(body: string) {
    return body.split("\n")
        .map((line, n) => sprintf('%4d | %s', n + 1, line))
        .join("\n")
}


export function nonNull<T1, T2>(v: T1): T2 {
    if (!v)
        throw new Error(`non-null check error: ${v}`)
    return v as any as T2
}