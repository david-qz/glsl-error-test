export const dimensionMismatchVertexShader =
`void main() {
  gl_Position = vec3(0.0, 0.0, 0.0);
}
`;

export const missingDimensionInFragmentShader =
`void main() {
  const float rgb = 0.5;
  gl_FragColor = vec4(rgb, rgb, rgb, 1.0);
}
`;

export const missingSemicolon =
`void main() {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0)
}
`;

export const badVersionDirective =
`#version 300

void main() {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0)
}
`;

export const linkIssueVertexShader =
`attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
varying vec3 normal;

void main() {
  normal = aVertexNormal;
  gl_Position = vec4(aVertexPosition, 1.0);
}`;

export const linkIssueFragmentShader =
`precision highp float;
varying vec3 vertexNormal;

void main() {
  gl_FragColor = vec4(vertexNormal, 1.0);
}
`;

export const version3ESLinkIssueVertex =
`#version 300 es

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uNormalMatrix;

in vec4 aVertexPosition;
in vec4 aVertexNormal;
out vec3 vertexNormal;

void main() {
  vertexNormal = (uNormalMatrix * aVertexNormal).xyz;
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
}
`;

export const version3ESLinkIssueFragment =
`#version 300 es

precision highp float;

in vec3 normal;
out vec4 fragment_color;

void main() {
  fragment_color = vec4(normal, 1.0);
}
`;
