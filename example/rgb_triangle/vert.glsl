attribute  vec2   a_coord;
attribute  vec4   a_color;
varying    vec4   v_color;

void main() {
    v_color = a_color;
    gl_Position = vec4(a_coord, 0., 1.);
}