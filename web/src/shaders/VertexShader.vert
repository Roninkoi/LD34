precision mediump float;

attribute vec4 a_pos;
//attribute vec4 a_col;
attribute vec4 a_sprite;

uniform mat4 objectMatrix;
uniform mat4 viewMatrix;
uniform mat4 perspectiveMatrix;

//uniform mat4 u_matrix;

//uniform mat4 cameraMatrix;

uniform vec4 u_col;

varying vec2 v_texpos;
varying vec4 v_col;

void main()
{
    vec4 pos = perspectiveMatrix*viewMatrix*objectMatrix*vec4(a_pos.xyz, 1.0);
    gl_Position = pos;

    v_texpos = vec2((a_pos.x-a_sprite.x)*a_sprite.z, (a_pos.y-a_sprite.y)*a_sprite.w);

    v_col = /*a_col*/u_col*vec4(vec3(pos.z/128.0 + 1.3, pos.z/128.0 + 1.3, pos.z/128.0 + 1.3), 1.0);
}
