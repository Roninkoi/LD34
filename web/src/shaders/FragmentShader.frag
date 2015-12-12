precision mediump float;

varying vec2 v_texpos;
varying vec4 v_col;

uniform sampler2D u_texture;
uniform float u_a;

void main()
{
    gl_FragColor = texture2D(u_texture, vec2(v_texpos.x, v_texpos.y))*v_col;
     //  gl_FragColor = vec4(vec3(gl_FragCoord.z), 1.0);

}
