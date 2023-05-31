import React, { CSSProperties, PropsWithChildren } from 'react';

export interface LoaderProps extends  LoaderStyleProps {
    count?: number;
    wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>;
    className?: string;
    containerClassName?: string;
    containerTestId?: string;
    circle?: boolean;
    style?: CSSProperties;
}

export interface LoaderStyleProps {
    baseColor?: string;
    highlightColor?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    inline?: boolean;
    duration?: number;
    direction?: 'ltr' | 'rtl';
    enableAnimation?: boolean;
  }