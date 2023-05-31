import { LoaderStyleProps } from "./type";
import React from "react";

export function styleOptionsToCssProperties({
    baseColor,
    highlightColor,
    width,
    height,
    borderRadius,
    circle,
    direction,
    duration,
    enableAnimation = true,
  }: LoaderStyleProps & { circle: boolean }): React.CSSProperties {
    const style: React.CSSProperties & Record<`--${string}`, string> = {};
  
    if (direction === 'rtl') style['--animation-direction'] = 'reverse';
    if (typeof duration === 'number')
      style['--animation-duration'] = `${duration}s`;
    if (!enableAnimation) style['--pseudo-element-display'] = 'none';
  
    if (typeof width === 'string' || typeof width === 'number')
      style.width = width;
    if (typeof height === 'string' || typeof height === 'number')
      style.height = height;
  
    if (typeof borderRadius === 'string' || typeof borderRadius === 'number')
      style.borderRadius = borderRadius;
  
    if (circle) {
        style.borderRadius = '50%';
        if (!style.height) {
            style.height = '50px';
            style.width = '50px'
        }
    }
  
    if (typeof baseColor !== 'undefined') style['--base-color'] = baseColor;
    if (typeof highlightColor !== 'undefined')
      style['--highlight-color'] = highlightColor;
  
    return style;
  }