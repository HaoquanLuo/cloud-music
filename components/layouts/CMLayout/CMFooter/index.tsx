import React, { ReactNode } from "react";

interface CMFooterProps {
  children: ReactNode;
}

const CMFooter: React.FC<CMFooterProps> = (props: CMFooterProps) => {
  const { children } = props;
  return (
    <div id={"view-player"} className={"w-full h-28! px-9 py-2"}>
      {children}
    </div>
  );
};

export default CMFooter;
