import React, { ReactNode } from "react";

function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-3xl font-bold lg:text-5xl ${className}`}>
      {children}
    </div>
  );
}

export default Heading;
