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
