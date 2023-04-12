import Link from "next/link";

import {
  CMStateDispatchContextProps,
  useCMState,
  useCMStateDispatch,
} from "@/components/layouts/CMLayout/context";

import LinkBox from "@/components/common/LinkBox";
import React from "react";

interface CMContentMenuLinkProps {
  navLinks: CM.RouteLink[];
}

const CMContentNavLink: React.FC<CMContentMenuLinkProps> = (props) => {
  const { navLinks } = props;
  const CMState = useCMState() as CM.State;
  const { activeNavLink } = CMState;
  const { dispatch, storageDispatch } =
    useCMStateDispatch() as CMStateDispatchContextProps;
  const handleSwitchHomeNavLink = React.useCallback(
    (to: string) => () => {
      dispatch({
        type: "homeNavLink",
        payload: to,
      });
      storageDispatch({
        ...CMState,
        activeNavLink: {
          ...activeNavLink,
          homeNavLink: to,
        },
      });
    },
    [CMState, activeNavLink, dispatch, storageDispatch]
  );
  return (
    <div
      id={"content-menuLink"}
      className={"w-full h-8 my-3 flex jc gap-6 text-base"}
    >
      {navLinks.map((item, idx) => {
        return (
          <Link href={item.routePath} key={item.routeTitle}>
            <LinkBox
              active={{
                value: activeNavLink.homeNavLink === item.routeTitle,
                type: "activeBottom",
              }}
              clickFunction={handleSwitchHomeNavLink(item.routeTitle)}
            >
              {item.routeContent}
            </LinkBox>
          </Link>
        );
      })}
    </div>
  );
};

export default CMContentNavLink;
