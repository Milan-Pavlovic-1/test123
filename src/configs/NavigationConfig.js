import {
  UserOutlined,
  LineChartOutlined,
  FileTextOutlined,
  SafetyOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";
const extraNavTree = [
  {
    key: "extra",
    path: `${APP_PREFIX_PATH}/pages`,
    title: "sidenav.menu",
    icon: UserOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/clients/ListClients`,
        title: "sidenav.clients",
        icon: UserOutlined,
        breadcrumb: true,
        isForUser: true,
        submenu: [],
      },
      {
        key: "offers",
        path: `${APP_PREFIX_PATH}/offers/list-offers`,
        title: "sidenav.offers",
        icon: LineChartOutlined,
        breadcrumb: true,
        isForUser: true,
        submenu: [],
      },
      {
        key: "contracts",
        path: `${APP_PREFIX_PATH}/contract/list-contracts`,
        title: "sidenav.contracts",
        icon: FileTextOutlined,
        breadcrumb: true,
        isForUser: true,
        submenu: [],
      },
      {
        key: "configurationManager",
        path: `${APP_PREFIX_PATH}/pages`,
        title: "sidenav.configurationManager",
        icon: ToolOutlined,
        breadcrumb: true,
        isForUser: false,
        submenu: [
          {
            key: "configurationManager-serviceGroups",
            path: `${APP_PREFIX_PATH}/group/groupList`,
            title: "sidenav.configurationManager.serviceGroups",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "configurationManager-serviceItems",
            path: `${APP_PREFIX_PATH}/price/priceList`,
            title: "sidenav.configurationManager.serviceItems",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "systemSecurityManager",
        path: "",
        title: "sidenav.systemSecurityManager",
        icon: SafetyOutlined,
        isForUser: false,
        breadcrumb: false,
        submenu: [
          {
            key: "systemSecurityManager-manageAllUsers",
            path: `${APP_PREFIX_PATH}/account/AccountList`,
            title: "sidenav.systemSecurityManager.managerAllUsers",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
    ],
  },
];
const navigationConfig = [...extraNavTree];
export default navigationConfig;
