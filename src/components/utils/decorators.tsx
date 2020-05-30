import React, { cloneElement, CSSProperties } from 'react';

export const withStyle = (style: any) => (component: any) =>
  cloneElement(component, { style });
