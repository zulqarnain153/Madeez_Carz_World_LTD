import { HTMLAttributes } from "react";

export function Container({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10 ${className}`}
      {...props}
    />
  );
}
