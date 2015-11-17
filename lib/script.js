

var main=function() {

  var CANVAS=document.getElementById("your_canvas");

  CANVAS.width=window.innerWidth;
  CANVAS.height=window.innerHeight;

  /*========================= GET WEBGL CONTEXT ========================= */
  var GL;
  try {
    GL = CANVAS.getContext("experimental-webgl", {antialias: false});
  } catch (e) {
    alert("You are not webgl compatible :(") ;
    return false;
  }

  /*========================= SHADERS ========================= */
  /*jshint multistr: true */

  var shader_vertex_source="\n\
attribute vec2 position;\n\
\n\
varying vec2 vUV;\n\
void main(void) {\n\
gl_Position = vec4(position, 0., 1.);\n\
vUV=0.5*(position+vec2(1.,1.));\n\
}";


  var shader_fragment_source="\n\
precision highp float;\n\
\n\
uniform sampler2D samplerVideo;\n\
\n\
varying vec2 vUV;\n\
\n\
void main(void) {\n\
vec4 videoColor=texture2D(samplerVideo, vUV);\n\
\n\
gl_FragColor = videoColor;\n\
}";


  var get_shader=function(source, type, typeString) {
    var shader = GL.createShader(type);
    GL.shaderSource(shader, source);
    GL.compileShader(shader);
    if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
      alert("ERROR IN "+typeString+ " SHADER : " + GL.getShaderInfoLog(shader));
      return false;
    }
    return shader;
  };

  var shader_vertex=get_shader(shader_vertex_source, GL.VERTEX_SHADER, "VERTEX");

  var shader_fragment=get_shader(shader_fragment_source, GL.FRAGMENT_SHADER, "FRAGMENT");

  var SHADER_PROGRAM=GL.createProgram();
  GL.attachShader(SHADER_PROGRAM, shader_vertex);
  GL.attachShader(SHADER_PROGRAM, shader_fragment);

  GL.linkProgram(SHADER_PROGRAM);

  var _samplerVideo = GL.getUniformLocation(SHADER_PROGRAM, "samplerVideo");

  var _position = GL.getAttribLocation(SHADER_PROGRAM, "position");
  GL.enableVertexAttribArray(_position);

  GL.useProgram(SHADER_PROGRAM);


  /*========================= THE SCREEN ========================= */
  //POINTS :
  var triangle_vertex=[
    -1,-1, //first summit -> bottom left of the viewport
    1,-1,  //bottom right
    1,1,   //top right
    -1,1   //top left
  ];

  var QUAD_VERTEX= GL.createBuffer ();
  GL.bindBuffer(GL.ARRAY_BUFFER, QUAD_VERTEX);
  GL.bufferData(GL.ARRAY_BUFFER,
                new Float32Array(triangle_vertex),
    GL.STATIC_DRAW);

  //FACES :
  //a quad is made of 2 triangles
  var quad_faces = [0,1,2, 0,2,3];
  var QUAD_FACES= GL.createBuffer ();
  GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, QUAD_FACES);
  GL.bufferData(GL.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(quad_faces),
    GL.STATIC_DRAW);


  /*========================= THE VIDEO TEXTURE ========================= */
  var video=document.getElementById("bunny_video");

  var videoTexture=GL.createTexture();
  GL.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, true);
  GL.bindTexture(GL.TEXTURE_2D, videoTexture);
  GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
  GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR);

  GL.texParameteri( GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE );
  GL.texParameteri( GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE );
  GL.bindTexture(GL.TEXTURE_2D, null);

  var refresh_texture=function() {
    GL.bindTexture(GL.TEXTURE_2D, videoTexture);
    GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, video);
  };

  /*========================= DRAWING ========================= */

  GL.uniform1i(_samplerVideo, 0);

  GL.disable(GL.DEPTH_TEST);
  GL.disable(GL.SCISSOR_TEST);

  GL.clearColor(0.0, 0.0, 0.0, 0.0);
  GL.viewport(0.0, 0.0, CANVAS.width, CANVAS.height);
  GL.clear(GL.COLOR_BUFFER_BIT);

  GL.bindBuffer(GL.ARRAY_BUFFER, QUAD_VERTEX);
  GL.vertexAttribPointer(_position, 2, GL.FLOAT, false,4*2,0) ;

  GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, QUAD_FACES);

  //render loop
  var animate=function() {

    if (video.currentTime>0) {
      GL.activeTexture(GL.TEXTURE0);
      refresh_texture();
    }

    GL.drawElements(GL.TRIANGLES, 6, GL.UNSIGNED_SHORT, 0);
    GL.flush();

    window.requestAnimationFrame(animate);
  };

  animate();
};