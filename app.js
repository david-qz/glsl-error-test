const output = document.querySelector('pre');
function log(string) {
  output.innerText += string + '\n';
}

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2');

if (!gl) {
  log('WebGL2 not supported :(');
  throw new Error('WebGL2 not supported :(');
}

function compileShaderAndLog(source, type) {

  let shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const compilationLog = gl.getShaderInfoLog(shader);
  if (compilationLog) {
    log(type === gl.VERTEX_SHADER ? 'Vertex shader:' : 'Fragment shader:');
    log(compilationLog);
  }

  return shader;
}

function linkShadersAndLog(vs, fs) {
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  const linkerLog = gl.getProgramInfoLog(program);
  if (linkerLog) {
    log('Linker:');
    log(linkerLog);
  }

  return program;
}

import * as shaders from './shaders.js';

log('Dimension mismatch');
log('================================================================================');

compileShaderAndLog(shaders.dimensionMismatchVertexShader, gl.VERTEX_SHADER);

log('Missing precision');
log('================================================================================');

compileShaderAndLog(shaders.missingDimensionInFragmentShader, gl.FRAGMENT_SHADER);

log('Link failure');
log('================================================================================');

const vs = compileShaderAndLog(shaders.linkIssueVertexShader, gl.VERTEX_SHADER);
const fs = compileShaderAndLog(shaders.linkIssueFragmentShader, gl.FRAGMENT_SHADER);
linkShadersAndLog(vs, fs);
