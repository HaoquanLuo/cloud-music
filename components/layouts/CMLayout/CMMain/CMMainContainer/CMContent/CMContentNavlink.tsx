import React from "react";
import Link from "next/link";

import ClickBox from "@/components/common/ClickBox";

import {
  CMStateDispatchContextProps,
  useCMState,
  useCMStateDispatch,
} from "@/components/layouts/CMLayout/context";

interface CMContentMenuLinkProps {
  navLinks: CM.RouteLink[];
}

const CMContentNavLink: React.FC<CMContentMenuLinkProps> = (props) => {
  const { navLinks } = props;
  const CMState = useCMState() as CM.State;
  const { navLinkActive } = CMState;
  const { dispatch, storageDispatch } =
    useCMStateDispatch() as CMStateDispatchContextProps;
  const handleSwitchHomeNavLink = React.useCallback(
    (to: string) => () => {
      dispatch({
        type: "navLinkHome",
        payload: to,
      });
      storageDispatch({
        ...CMState,
        navLinkActive: {
          ...navLinkActive,
          navLinkHome: to,
        },
      });
    },
    [CMState, navLinkActive, dispatch, storageDispatch]
  );
  return (
    <div
      id={"content-menuLink"}
      className={"w-full h-8 my-3 flex jc gap-6 text-base"}
    >
      {navLinks.map((item) => {
        return (
          <Link href={item.routePath} key={item.routeTitle}>
            <ClickBox
              active={{
                value: navLinkActive.navLinkHome === item.routeTitle,
                type: "activeBottom",
              }}
              clickFn={handleSwitchHomeNavLink(item.routeTitle)}
            >
              {item.routeContent}
            </ClickBox>
          </Link>
        );
      })}
    </div>
  );
};

export default CMContentNavLink;
