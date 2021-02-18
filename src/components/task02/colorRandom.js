function colorRandom() {
  const color = () => Math.round(Math.random() * 255);
  return `rgb(${color()}, ${color()}, ${color()})`;
}
export default colorRandom;