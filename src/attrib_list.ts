import { Program } from './program'
import * as glUtils from './utils'


export interface Member {
    name: string
    dataType?: number
    normalize?: boolean
    nComponents: number
}


export type TypedArray = Float32Array
export type DataOption = { members?: Member[], array?: TypedArray, usage?: number }


export class AttribList {
    private bufferName: WebGLBuffer
    private stride: number
    private offset: number[]
    private members: Member[]
    vertexCount = 0

    constructor(private gl: WebGLRenderingContext, data?: DataOption) {
        this.bufferName = glUtils.nonNull(gl.createBuffer())
        if (data) {
            this.setData(data)
        }
    }

    release() {
        this.gl.deleteBuffer(this.bufferName)
    }

    setData({ members, array, usage = this.gl.STATIC_DRAW }: DataOption) {
        if (members) {
            this.members = members
            this.stride = 0
            this.offset = []
            for (let m of members) {
                if (m.dataType == undefined) m.dataType = this.gl.FLOAT
                if (m.normalize == undefined) m.normalize = false
                this.offset.push(this.stride)
                this.stride += m.nComponents * sizeof(this.gl, m.dataType)
            }
        }
        if (array) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.bufferName)
            this.gl.bufferData(this.gl.ARRAY_BUFFER, array, usage)
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null)
            this.vertexCount = byteLength(array) / this.stride
            if (this.vertexCount % 1 !== 0) {
                throw "nComponents may be invalid"
            }
        }
    }

    enable(program: Program, f: () => void) {
        program.use()
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.bufferName)
        for (let i in this.members) {
            let m = this.members[i]
            this.gl.enableVertexAttribArray(program.attribLocation(m.name))
            this.gl.vertexAttribPointer(program.attribLocation(m.name), m.nComponents, m.dataType!, m.normalize!, this.stride, this.offset[i])
        }
        f()
        for (let m of this.members) {
            this.gl.disableVertexAttribArray(program.attribLocation(m.name))
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null)
    }

}


function sizeof(gl: WebGLRenderingContext, dataType: number) {
    switch (dataType) {
        case gl.FLOAT:
            return 4
        default:
            throw `unknown type: ${dataType}`
    }
}


function byteLength(array: TypedArray) {
    return array.length * array.BYTES_PER_ELEMENT
}