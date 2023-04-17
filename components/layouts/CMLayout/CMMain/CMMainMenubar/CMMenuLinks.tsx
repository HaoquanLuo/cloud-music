import React from "react";
import Link from "next/link";

import getIconByPath from "@/utils/getIconByPath";

import IconBox from "@/components/common/IconBox";
import ClickBox from "@/components/common/ClickBox";

import {
  CMStateDispatchContextProps,
  useCMState,
  useCMStateDispatch,
} from "@/components/layouts/CMLayout/context";

interface CMMenuLinksProps {
  menuLinks: CM.RouteLink[];
}

const CMMenuLinks: React.FC<CMMenuLinksProps> = (props) => {
  const { menuLinks } = props;
  const CMState = useCMState() as CM.State;
  const { navLinkActive } = CMState;
  const { dispatch, storageDispatch } =
    useCMStateDispatch() as CMStateDispatchContextProps;
  const handleSwitchMenuNavLink = React.useCallback(
    (to: string) => () => {
      dispatch({
        type: "navLinkMenu",
        payload: to,
      });
      storageDispatch({
        ...CMState,
        navLinkActive: {
          navLinkHome: "recommend",
          navLinkMenu: to,
        },
      });
    },
    [CMState, dispatch, storageDispatch]
  );
  const getActiveMenuLink = React.useCallback(
    (item: CM.RouteLink) => {
      return navLinkActive.navLinkMenu === item.routeTitle;
    },
    [navLinkActive.navLinkMenu]
  );
  return (
    <>
      {menuLinks.map((item) => {
        return (
          <Link key={item.routeTitle} href={item.routePath}>
            <ClickBox
              active={{
                value: getActiveMenuLink(item),
                type: "activeLeft",
              }}
              clickFn={handleSwitchMenuNavLink(item.routeTitle)}
            >
              <IconBox
                icon={getIconByPath(item.routeIconPath!)}
                iconSize={"2xl"}
                iconWidth={12}
                iconHeight={10}
              />
            </ClickBox>
          </Link>
        );
      })}
    </>
  );
};

export default CMMenuLinks;
