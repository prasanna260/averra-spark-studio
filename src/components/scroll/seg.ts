import type { CSSProperties } from "react";

/** CSS expression: 0→1 as the scene progress `--sp` moves from a to b (clamped). */
export const seg = (a: number, b: number) => `clamp(0, calc((var(--sp, 1) - ${a}) / ${b - a}), 1)`;

/** Fade + rise for an element entering between a and b. */
export const enter = (a: number, b: number, dist = 40, extra = ""): CSSProperties => ({
  opacity: seg(a, b),
  transform: `translate3d(0, calc((1 - ${seg(a, b)}) * ${dist}px), 0) ${extra}`,
});
