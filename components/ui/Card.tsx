import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { interactive = false, className, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-surface border border-border rounded-lg shadow-card",
        "transition-all duration-200 ease-out",
        interactive &&
          "hover:-translate-y-1 hover:shadow-card-hover hover:border-accent/40 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-3", className)} {...props} />;
}

export function CardBody({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-3", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-6 pt-3 border-t border-border", className)}
      {...props}
    />
  );
}
