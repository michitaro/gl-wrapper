interface loader {
    "raw-loader": string
    "file-loader": string
}


declare function require<K extends keyof loader>(module: string): loader[K]
declare function require(module: string): any