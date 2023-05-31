import React, { ReactElement } from 'react';
import {LoaderProps} from './type';
import './App.css';
import {styleOptionsToCssProperties} from './util';

function Loader({
    count = 1,
    wrapper: Wrapper,
    className: customClassName,
    containerClassName,
    containerTestId,
    circle = false,
    style: styleProp,
    ...originalPropsStyleOptions
}: LoaderProps): ReactElement {
  const propsStyleOptions = { ...originalPropsStyleOptions };
  let className = 'react-loading';
  if (customClassName) className += ` ${customClassName}`;

  const elements: ReactElement[] = [];

  const countCeil = Math.ceil(count);

  const styleOptions = {
    ...propsStyleOptions,
    circle,
  };

  const style = {
    ...styleProp,
    ...styleOptionsToCssProperties(styleOptions),
  };

  const inline = false;

  for (let i = 0; i < countCeil; i++) {
    let thisStyle = style;

    if (countCeil > count && i === countCeil - 1) {
        const width = thisStyle.width ?? '100%';
        const fractionalPart = count % 1;
        const fractionalWidth =
            typeof width === 'number'
            ? width * fractionalPart
            : `calc(${width} * ${fractionalPart})`;

        thisStyle = { ...thisStyle, width: fractionalWidth };
        }
        const skeletonSpan = (
            <span className={className} style={thisStyle} key={i}>
              &zwnj;
            </span>
          );
      
          if (inline) {
            elements.push(skeletonSpan);
          } else {
            elements.push(
              <React.Fragment key={i}>
                {skeletonSpan}
                <br />
              </React.Fragment>
            );
          }
    }
    

  return (
    <span
    className={containerClassName}
    data-testid={containerTestId}
    aria-busy={true}
  >
    {Wrapper
      ? elements.map((el, i) => <Wrapper key={i}>{el}</Wrapper>)
      : elements}
  </span>
  );
}

export default Loader;