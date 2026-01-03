import * as React from 'react';

import { Checkbox, mergeProps } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';

const checkBoxVariants = cva(
  'relative border-highlight bg-background shadow-inset focus-visible:ring-foreground h-5 w-5 shrink-0 rounded-sm border-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none data-[checked]:bg-linear-to-tl data-[checked]:from-primary/5 data-[checked]:to-primary/25 data-[checked]:shadow-raised duration-350 ease-out transition-all data-[checked]:border-primary/50 cursor-pointer disabled:opacity-50'
);

const checkIndicatorVariants = cva(
  'flex items-center justify-center absolute top-1/2 left-1/2 -translate-1/2'
);

interface CheckBoxProps
  extends
    React.ComponentProps<typeof Checkbox.Root>,
    VariantProps<typeof checkBoxVariants> {
  className?: string;
}

const NeuCheckBox = (props: CheckBoxProps) => {
  const mergedProps = mergeProps(props, {
    className: checkBoxVariants(),
  });

  const mergedIndicatorProps = mergeProps(props, {
    className: checkIndicatorVariants(),
  });

  return (
    <Checkbox.Root {...mergedProps}>
      <Checkbox.Indicator {...mergedIndicatorProps}>
        <Check className='text-primary h-3 w-3' />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};

export default NeuCheckBox;
