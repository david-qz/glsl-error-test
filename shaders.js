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
