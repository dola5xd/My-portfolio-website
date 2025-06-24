import { ReactNode } from "react";

function SectionHead({
  children,
  animate = true,
  className,
}: {
  children: ReactNode;
  animate?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl lg:text-5xl font-semibold ${
        animate ? "animate-pulse" : ""
      } ${className || ""} `}
    >
      {children}
    </h2>
  );
}

export default SectionHead;
