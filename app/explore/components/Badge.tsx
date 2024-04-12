// import * as React from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// import { ClassValue, clsx } from "clsx";
// import { Diff } from "lucide-react";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// const badgeVariants = cva(
//   "inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary border-transparent text-primary-foreground",
//         completed:
//           "dark:bg-green-500 bg-green-700 border-transparent text-primary-foreground",
//         secondary:
//           "bg-secondary border-transparent text-secondary-foreground dark:bg-zinc-700",
//         destructive:
//           "bg-destructive border-transparent text-destructive-foreground",
//         outline: "text-foreground",
//       },
//       size: {
//         default: "px-2.5 py-0.5 text-xs",
//         xs: "px-0 py-0 text-xs",
//         sm: "px-1 text-xs",
//         lg: "px-2.5 py-0.5 text-sm",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// export interface BadgeProps
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof badgeVariants> {}

// function Badge({ className, variant, ...props }: BadgeProps) {
//   return (
//     <div className={cn(badgeVariants({ variant }), className)} {...props} />
//   );
// }

// export { Badge, badgeVariants };

import React from "react";

function Badge() {
  return (
    <div className="container text-center">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Explore
      </h1>
      <p className="mx-auto max-w-[69ch] text-lg leading-10 text-neutral-600 dark:text-white/50">
        Explore the challenges. Embrace the opportunity to grow, learn, and
        showcase your programming abilities. We hope you find the{" "}
        <span className="font-semibold dark:text-neutral-200">perfect</span>{" "}
        challenge!
      </p>
    </div>
  );
}

export default Badge;
