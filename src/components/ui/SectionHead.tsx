import { ReactNode } from "react";

function SectionHead({
  children,
  animate = true,
}: {
  children: ReactNode;
  animate?: boolean;
}) {
  return (
    <h2
      className={`text-3xl lg:text-5xl font-semibold ${
        animate ? "animate-pulse" : ""
      }`}
    >
      {children}
    </h2>
  );
}

export default SectionHead;
