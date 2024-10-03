export function isCollision(source: HTMLElement, target: HTMLElement): boolean {
  const sourceRect = source.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  return !(
    sourceRect.top > targetRect.bottom ||
    sourceRect.right < targetRect.left ||
    sourceRect.bottom < targetRect.top ||
    sourceRect.left > targetRect.right
  );
}
