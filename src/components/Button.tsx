import { mergeProps, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttVariants = cva(
  'focus-visible:ring-foreground border-border shadow-raised active:shadow-inset inline-flex cursor-pointer items-center justify-center border-3 bg-linear-to-tl font-medium hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-97 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'from-muted/5 to-muted/25',
        primary: 'text-primary from-primary/5 to-primary/25',
        destructive: 'text-destructive from-destructive/5 to-destructive/25',
        warning: 'text-warning from-warning/5 to-warning/25',
        success: 'text-success from-success/5 to-success/25',
        info: 'text-info from-info/5 to-info/25',
      },
      size: {
        default: 'h-12 px-4',
        icon: 'h-12 w-12',
      },
      shape: {
        default: ' rounded-xl',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'default',
    },
  }
);

interface ButtonProps
  extends
    useRender.ComponentProps<'button'>,
    VariantProps<typeof buttVariants> {}

const Button = (props: ButtonProps) => {
  const mergedProps = mergeProps(props, {
    className: twMerge(
      buttVariants({
        variant: props.variant,
        size: props.size,
        shape: props.shape,
      }),
      props.className
    ),
  });

  const element = useRender({
    defaultTagName: 'button',
    render: props.render,
    props: mergedProps,
  });

  return element;
};

export default Button;
