import * as glUtils from './utils'

export interface DataOption {
    usage?: number,
    array: Int16Array,
}

export class IndexBuffer {
    private name: WebGLBuffer
    private usage: number
    private length: number

    constructor(private gl: WebGLRenderingContext, dataOption?: DataOption) {
        this.name = glUtils.nonNull(this.gl.createBuffer())
        if (dataOption)
            this.setData(dataOption)
    }

    release() {
        this.gl.deleteBuffer(this.name)
    }

    bind(cb:()=>void) {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.name)
        cb()
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null)
    }

    setData({ usage, array }: DataOption) {
        this.usage = usage || this.gl.STATIC_DRAW
        this.length = array.length
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.name)
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, array, this.usage)
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null)
    }
}