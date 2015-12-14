precision mediump float;

varying vec2 v_texpos;
varying vec4 v_col;

uniform sampler2D u_texture;
uniform float u_a;

void main()
{
    vec4 col = texture2D(u_texture, vec2(v_texpos.x, v_texpos.y))*v_col;
    if (col.a >= 0.2) {
    gl_FragColor = col*vec4(1.0, 0.8, 0.6, 1.0);
    }
    else {
    discard;
    }
     //  gl_FragColor = vec4(vec3(gl_FragCoord.z), 1.0);
}
