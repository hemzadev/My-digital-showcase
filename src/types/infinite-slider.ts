export type ResponsiveValue<T> = {
    base: T;
    md?: T;
    lg?: T;
  };
  
  export type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: ResponsiveValue<number>;
    duration?: ResponsiveValue<number>;
    durationOnHover?: ResponsiveValue<number>;
    direction?: ResponsiveValue<'horizontal' | 'vertical'>;
    reverse?: ResponsiveValue<boolean>;
    className?: string;
  };
  
  