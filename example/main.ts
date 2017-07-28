import { canvasPool, Program, AttribList, Texture, utils } from '../src'


window.addEventListener('load', async e => {
    const { canvas, gl } = canvasPool.pull({ alpha: false })
    const mp = document.querySelector('#mount-point')!.appendChild(canvas)
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    resizeCanvasContext(canvas)

    const img = await loadImage(require<"file-loader">("file-loader!./texture/scene.jpg"))
    draw(gl, img)
})


function resizeCanvasContext(canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl')!
    const r = devicePixelRatio
    const w = r * canvas.clientWidth
    const h = r * canvas.clientHeight
    canvas.width = w
    canvas.height = h
    gl.viewport(0, 0, w, h)
}


async function loadImage(url: string) {
    return new Promise<HTMLImageElement>(resolve => {
        const img = new Image()
        img.onload = () => {
            resolve(img)
        }
        img.src = url
    })
}


function draw(gl: WebGLRenderingContext, img: HTMLImageElement) {
    gl.clear(gl.COLOR_BUFFER_BIT)
    drawRGBTriangle(gl)
    drawTexture(gl, img)
}


function drawRGBTriangle(gl: WebGLRenderingContext) {
    const program = Program.new(gl,
        require<"raw-loader">('raw-loader!./rgb_triangle/vert.glsl'),
        require<"raw-loader">('raw-loader!./rgb_triangle/frag.glsl'))

    const attribList = new AttribList(gl, {
        members: [
            { name: 'a_coord', nComponents: 2 },
            { name: 'a_color', nComponents: 4 },
        ],
        array: new Float32Array([
            /* a_coord */ -1, -1, /* a_color */ +1, +0, +0, +1,
            /* a_coord */ +1, -1, /* a_color */ +0, +1, +0, +1,
            /* a_coord */ +0, +1, /* a_color */ +0, +0, +1, +1,
        ])
    })

    const start = performance.now()
    attribList.enable(program, () => {
        gl.drawArrays(gl.TRIANGLES, 0, attribList.vertexCount)
    })

    program.release()
    attribList.release()
}


function drawTexture(gl: WebGLRenderingContext, img: HTMLImageElement) {
    const program = Program.new(gl,
        require<'raw-loader'>('raw-loader!./texture/vert.glsl'),
        require<'raw-loader'>('raw-loader!./texture/frag.glsl'))

    const attribList = new AttribList(gl, {
        members: [{ name: 'a_coord', nComponents: 2 }],
        array: new Float32Array([
            0, 0,
            1, 0,
            0, 1,
            1, 1,
        ])
    })

    const texture = new Texture(gl)
    texture.setImage(img)

    program.uniform1i({ u_texture0: 0 })
    attribList.enable(program, () => {
        utils.bind([texture], () => {
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, attribList.vertexCount)
        })
    })

    program.release()
    attribList.release()
}