import { describe, it, expect } from "bun:test";

import { isCollision } from "./isCollision";

describe("isCollision", () => {
  it("should return true if two elements are colliding", () => {
    const source = {
      getBoundingClientRect: () => ({ top: 0, right: 10, bottom: 10, left: 0 }),
    };
    const target = {
      getBoundingClientRect: () => ({ top: 5, right: 15, bottom: 15, left: 5 }),
    };

    expect(isCollision(source as any, target as any)).toBe(true);
  });

  it("should return false if two elements are not colliding", () => {
    const source = {
      getBoundingClientRect: () => ({ top: 0, right: 10, bottom: 10, left: 0 }),
    };
    const target = {
      getBoundingClientRect: () => ({
        top: 11,
        right: 15,
        bottom: 15,
        left: 11,
      }),
    };

    expect(isCollision(source as any, target as any)).toBe(false);
  });
});
