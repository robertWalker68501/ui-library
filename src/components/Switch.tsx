import { mergeProps, Switch, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const switchVariants = cva(
  'focus-visible:ring-foreground bg-background shadow-inset data-[checked]:bg-primary border-highlight data-[checked]:border-primary inline-flex h-5.5 w-12 cursor-pointer rounded-full border-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
);
const thumbVariants = cva(
  'bg-background shadow-inset border-highlight after:bg-muted-foreground data-[checked]:after:bg-primary relative block h-5 w-5 translate-x-0 rounded-full border-1 transition-all duration-350 ease-out after:absolute after:top-1/2 after:left-1/2 after:h-1 after:w-1 after:-translate-1/2 after:rounded-full data-[checked]:translate-x-6.5'
);

interface SwitchProps
  extends
    useRender.ComponentProps<'switch'>,
    VariantProps<typeof switchVariants> {}

export default function NeuSwitch(props: SwitchProps) {
  const mergedProps = mergeProps(props, {
    className: switchVariants(),
  });

  const thumbProps = mergeProps(props, {
    className: thumbVariants(),
  });

  return (
    <Switch.Root {...mergedProps}>
      <Switch.Thumb {...thumbProps} />
    </Switch.Root>
  );
}
