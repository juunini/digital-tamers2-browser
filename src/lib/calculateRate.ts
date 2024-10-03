const constantWidth = 538;
const constantHeight = 300;

export function calculteRate(): number {
  const currentWidth = window.innerWidth / constantWidth;
  const currentHeight = window.innerHeight / constantHeight;

  return currentWidth < currentHeight ? currentWidth : currentHeight;
}
