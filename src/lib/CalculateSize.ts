const constantWidth = 538;
const constantHeight = 300;

export function CalculateSize(
  element: HTMLElement,
  width: number,
  height: number
) {
  const currentWidth = window.innerWidth / constantWidth;
  const currentHeight = window.innerHeight / constantHeight;

  element.style.width = `${width * currentWidth}px`;
  element.style.height = `${height * currentHeight}px`;
}
