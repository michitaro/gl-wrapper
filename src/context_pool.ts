class CanvasPool {
    private pool: HTMLCanvasElement[] = []

    pull() {
        if (this.pool.length == 0) {
            const canvas = document.createElement('canvas')
            canvas.style.backgroundColor = '#007'
            this.pool.push(canvas)
        }
        return this.pool.shift()!
    }

    push(canvas: HTMLCanvasElement) {
        this.pool.unshift(canvas)
    }
}



const pools = new Map<string, CanvasPool>()
const canvas2pool = new Map<HTMLCanvasElement, CanvasPool>()


function opt2key(opt: any) {
    return JSON.stringify(Object.keys(opt).sort().map(k => [k, opt[k]]))
}


export function pull(opt: WebGLContextAttributes) {
    const key = opt2key(opt)
    if (!pools.has(key))
        pools.set(key, new CanvasPool())
    const pool = pools.get(key)!
    const canvas = pool.pull()
    const gl = canvas.getContext('webgl', opt) || canvas.getContext('experimental-webgl')
    if (gl == null)
        throw new Error("gl == null")
    canvas2pool.set(canvas, pool)
    return { canvas, gl }
}


export function push(canvas: HTMLCanvasElement) {
    canvas2pool.get(canvas)!.push(canvas)
}