import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { connect } from "react-redux";
import {
  SettingOutlined,
  LogoutOutlined,
  LockOutlined,
} from "@ant-design/icons";
import Icon from "components/util-components/Icon";
import { signOut } from "redux/actions/Auth";
import {
  APP_PREFIX_PATH,
  AUTH_PREFIX_PATH,
  ClaimsEmail,
  ClaimsKey,
} from "configs/AppConfig";
import jwt from "jwt-decode";
import IntlMessage from "components/util-components/IntlMessage";
import { Link } from "react-router-dom";

export const NavProfile = ({ signOut, localization }) => {
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const menuItem = [
    {
      title: setLocale(localization, "AccountSettings"),
      icon: SettingOutlined,
      path: `${APP_PREFIX_PATH}/account/account-settings/${
        jwt(localStorage.getItem("auth_token"))[ClaimsKey]
      }`,
    },
    {
      title: setLocale(localization, "ChangePassword"),
      icon: LockOutlined,
      path: `${AUTH_PREFIX_PATH}/change-password`,
    },
  ];
  const profileImg = `/img/images/${
    jwt(localStorage.getItem("auth_token")).Avatar
  }`;
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <div className="pl-3">
            <h4 className="mb-0">
              {jwt(localStorage.getItem("auth_token")).Name}
            </h4>
            <span className="text-muted">
              {jwt(localStorage.getItem("auth_token"))[ClaimsEmail]}
            </span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <Link to={el.path}>
                  <Icon type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </Link>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.length + 1} onClick={(e) => signOut()}>
            <span>
              <LogoutOutlined />
              <span className="font-weight-normal">
                {setLocale(localization, "SignOut")}
              </span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          <Avatar src={profileImg} />
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
};

export default connect(null, { signOut })(NavProfile);
