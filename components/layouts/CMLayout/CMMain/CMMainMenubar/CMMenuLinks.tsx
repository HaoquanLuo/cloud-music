import Link from "next/link";

import getIconByPath from "@/utils/getIconByPath";

import {
  CMStateDispatchContextProps,
  useCMState,
  useCMStateDispatch,
} from "@/components/layouts/CMLayout/context";

import IconBox from "@/components/common/IconBox";
import LinkBox from "@/components/common/LinkBox";
import React from "react";

interface CMMenuLinksProps {
  menuLinks: CM.RouteLink[];
}

const CMMenuLinks: React.FC<CMMenuLinksProps> = (props) => {
  const { menuLinks } = props;
  const CMState = useCMState() as CM.State;
  const { activeNavLink } = CMState;
  const { dispatch, storageDispatch } =
    useCMStateDispatch() as CMStateDispatchContextProps;
  const handleSwitchMenuNavLink = React.useCallback(
    (to: string) => () => {
      dispatch({
        type: "menuNavLink",
        payload: to,
      });
      storageDispatch({
        ...CMState,
        activeNavLink: {
          homeNavLink: "recommend",
          menuNavLink: to,
        },
      });
    },
    [CMState, dispatch, storageDispatch]
  );
  const getActiveMenuLink = React.useCallback(
    (item: CM.RouteLink) => {
      return activeNavLink.menuNavLink === item.routeTitle;
    },
    [activeNavLink.menuNavLink]
  );
  return (
    <>
      {menuLinks.map((item, idx) => {
        return (
          <Link key={item.routeTitle} href={item.routePath}>
            <LinkBox
              active={{
                value: getActiveMenuLink(item),
                type: "activeLeft",
              }}
              clickFunction={handleSwitchMenuNavLink(item.routeTitle)}
            >
              <IconBox
                icon={getIconByPath(item.routeIconPath!)}
                iconSize={"2xl"}
                iconWidth={12}
                iconHeight={10}
              />
            </LinkBox>
          </Link>
        );
      })}
    </>
  );
};

export default CMMenuLinks;
