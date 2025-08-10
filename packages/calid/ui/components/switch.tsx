import { cn } from "@calid/features/lib/cn";
import * as PrimitiveSwitch from "@radix-ui/react-switch";
import * as React from "react";

const Switch = React.forwardRef<
  React.ElementRef<typeof PrimitiveSwitch.Root>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSwitch.Root>
>(({ className, ...props }, ref) => (
  <PrimitiveSwitch.Root
    className={cn(
      "focus-visible:ring-ring focus-visible:ring-offset-background data-[state=unchecked]:bg-default data-[state=checked]:bg-cal-active peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
    ref={ref}>
    <PrimitiveSwitch.Thumb
      className={cn(
        "bg-default pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </PrimitiveSwitch.Root>
));
Switch.displayName = PrimitiveSwitch.Root.displayName;

export { Switch };
