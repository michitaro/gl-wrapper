precision mediump float;
varying vec2      v_coord;
uniform sampler2D u_texture0;


void main(void){
    gl_FragColor = texture2D(u_texture0, vec2(
             v_coord.x,
        1. - v_coord.y
    ));
}