import * as glUtils from './utils'

export type ImageLike = HTMLImageElement | HTMLCanvasElement | ImageData

export class Texture {
    private name: WebGLTexture

    constructor(private gl: WebGLRenderingContext) {
        this.name = glUtils.nonNull(gl.createTexture())
        this.bind(() => {
            gl.texParameteri(this.gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            gl.texParameteri(this.gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            gl.texParameteri(this.gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
            gl.texParameteri(this.gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        })
    }

    release() {
        this.gl.deleteTexture(this.name)
    }

    bind(cb: () => void) {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.name)
        cb()
        this.gl.bindTexture(this.gl.TEXTURE_2D, null)

    }

    setImage(img: ImageLike) {
        this.bind(() => {
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, img)
        })
    }
}