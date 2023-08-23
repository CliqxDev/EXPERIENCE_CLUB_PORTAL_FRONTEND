const unit = 'px';

const sizes: { [key: string]: { start: number; end?: number } } = {
  xs: {
    start: 0,
    end: 599,
  },
  sm: {
    start: 600,
    end: 1023,
  },
  md: {
    start: 1024,
    end: 1439,
  },
  lg: {
    start: 1440,
    end: 1919,
  },
  xl: {
    start: 1920,
  },
};

type Options = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const up = (size: Options | number) => {
  let value;
  if (typeof size === 'number') {
    value = size;
  } else {
    value = sizes[size].start;
  }

  return `@media (min-width:${value}${unit})`;
};

const down = (size: Options | number) => {
  let value;

  if (typeof size === 'number') {
    value = size;
  } else {
    value = sizes[size].end;
  }

  return `@media (max-width:${value}${unit})`;
};

const between = (startSize: Options | number, endSize: Options | number) => {
  let startValue; let endValue;

  if (typeof startSize === 'number') {
    startValue = startSize;
  } else {
    startValue = sizes[startSize].start;
  }

  if (typeof startSize === 'number') {
    endValue = endSize;
  } else {
    endValue = sizes[endSize].end;
  }

  return `@media (max-width:${endValue}${unit}) and (min-width:${startValue}${unit})`;
};

const only = (key: Options | number) => between(key, key);

export const breakpoints = {
  between,
  down,
  only,
  sizes,
  up,
};

export default breakpoints;