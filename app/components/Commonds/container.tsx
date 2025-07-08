import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="max-w-[1320px] mx-auto sm:px-5 md:px-10 lg:px-0">
      {children}
    </div>
  );
}
