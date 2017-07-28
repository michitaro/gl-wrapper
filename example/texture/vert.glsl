attribute  vec2   a_coord;
varying    vec2   v_coord;

void main() {
    v_coord = a_coord;
    gl_Position = vec4(0.5 * a_coord, 0., 1.);
}