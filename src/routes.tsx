
import React from "react";
import { Icon } from "@chakra-ui/react";
import { RiGroupLine, RiHomeLine} from "react-icons/ri";
import { IoChatbubbleEllipsesOutline, IoFlagOutline, IoSettingsOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

const routes: any = [
  {
    name: "Dashboard",
    path: "/",
    icon: <Icon as={RiHomeLine} width="30px" height="30px" color="inherit" />,
  },
  {
    name: 'Compaigns',
    path: '/compaigns',
    icon: (
      <Icon
        as={IoFlagOutline}
        width="30px"
        height="30px"
        color="inherit"
      />
    ),
  },
  {
    name: 'Inbox',
    path: '/inbox',
    icon: (
      <Icon
        as={IoChatbubbleEllipsesOutline}
        width="30px"
        height="30px"
        color="inherit"
      />
    ),
  },
  {
    name: 'Leads',
    path: '/leads',
    icon: (
      <Icon
        as={CiStar}
        width="30px"
        height="30px"
        color="inherit"
      />
    ),
  },
  {
    name: 'Team',
    path: '/team',
    icon: (
      <Icon
        as={RiGroupLine }
        width="30px"
        height="30px"
        color="inherit"
      />
    ),
  },
  {
    name: 'Setting',
    path: '/setting',
    icon: (
      <Icon
        as={IoSettingsOutline}
        width="30px"
        height="30px"
        color="inherit"
      />
    ),
  },
];

export default routes;
