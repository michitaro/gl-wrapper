# gl-wrapper
Simple wrapper classes of WebGL objects in TypeScript.

## Install

```sh
npm instasll --save @hscmap/gl-wrapper
```

## Example

### How to run example code
1. Start local http server that sersves the example files.
    ```sh
    git clone https://github.com/michitaro/gl-wrapper.git
    cd gl-wrapper
    npm install
    npm run example
    ```
1. Now, example files are served at [http://localhost:8080/]()

## Example Code

```typescript
import { canvasPool, Program, AttribList, Texture } from '@hscmap/gl-wrapper'


window.addEventListener('load', async () => {
    const { canvas, gl } = canvasPool.pull({ alpha: false })
    const mp = document.querySelector('#mount-point')!
    mp.appendChild(canvas)
    resizeCanvasContext(canvas)

    const img = await loadImage(require<"file-loader">("file-loader!./texture/scene.jpg"))

    gl.clear(gl.COLOR_BUFFER_BIT)
    drawRGBTriangle(gl)
    drawTexture(gl, img)
})


function resizeCanvasContext(canvas: HTMLCanvasElement) {
    canvas.style.width = '100%'
    canvas.style.height = '100%'
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
        img.onload = () => resolve(img)
        img.src = url
    })
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

    program.enableAttribList(attribList, () => {
        gl.drawArrays(gl.TRIANGLES, 0, attribList.vertexCount)
    })

    attribList.release()
    program.release()
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

    program.enableAttribList(attribList, () => {
        texture.bind(() => {
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, attribList.vertexCount)
        })
    })

    texture.release()
    attribList.release()
    program.release()
}
```