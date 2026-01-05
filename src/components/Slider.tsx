import * as React from 'react';

import { mergeProps, Slider } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const sliderVariants = cva('h-4 w-full');

const trackVariants = cva('shadow-inset relative h-4 w-full rounded-full');

const rangeVariants = cva('absolute h-full rounded-full', {
  variants: {
    variant: {
      default: 'from-primary to-primary/75 bg-linear-to-l',
      secondary: 'from-muted-foreground to-muted-foreground/75 bg-linear-to-l',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const thumbVariants = cva(
  'border-highlight bg-background shadow-inset active:shadow-raised h-5 w-5 cursor-pointer rounded-full border-1 transition-shadow duration-350 ease-out'
);

interface SliderProps
  extends
    React.ComponentProps<typeof Slider.Root>,
    VariantProps<typeof rangeVariants> {}

export const NeuSlider = (props: SliderProps) => {
  const mergedProps = mergeProps(props, {
    className: sliderVariants(),
  });

  return (
    <Slider.Root {...mergedProps}>
      <Slider.Control className='relative'>
        <Slider.Track className={trackVariants()}>
          <Slider.Indicator
            className={rangeVariants({ variant: props.variant })}
          />
        </Slider.Track>
        <Slider.Thumb className={thumbVariants()} />
      </Slider.Control>
    </Slider.Root>
  );
};
