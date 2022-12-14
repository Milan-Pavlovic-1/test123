import React from "react";
import { connect } from "react-redux";
import SideNav from "components/layout-components/SideNav";
import TopNav from "components/layout-components/TopNav";
import MobileNav from "components/layout-components/MobileNav";
import HeaderNav from "components/layout-components/HeaderNav";
import PageHeader from "components/layout-components/PageHeader";
import Footer from "components/layout-components/Footer";
import AppViews from "views/app-views";
import { Layout, Grid } from "antd";

import navigationConfig from "configs/NavigationConfig";
import {
  SIDE_NAV_WIDTH,
  SIDE_NAV_COLLAPSED_WIDTH,
  NAV_TYPE_TOP,
  DIR_RTL,
  DIR_LTR,
} from "constants/ThemeConstant";
import utils from "utils";

const { Content } = Layout;
const { useBreakpoint } = Grid;

export const AppLayout = ({ navCollapsed, navType, location, direction }) => {
  const currentRouteInfo = utils.getRouteInfo(
    navigationConfig,
    location.pathname
  );
  const screens = utils.getBreakPoint(useBreakpoint());
  const isMobile = !screens.includes("lg");
  const isNavTop = navType === NAV_TYPE_TOP;
  const getLayoutGutter = () => {
    if (isNavTop || isMobile) {
      return 0;
    }
    return navCollapsed ? SIDE_NAV_COLLAPSED_WIDTH : SIDE_NAV_WIDTH;
  };

  const getLayoutDirectionGutter = () => {
    if (direction === DIR_LTR) {
      return { paddingLeft: getLayoutGutter() };
    }
    if (direction === DIR_RTL) {
      return { paddingRight: getLayoutGutter() };
    }
    return { paddingLeft: getLayoutGutter() };
  };

  return (
    <>
      {window.location.pathname.includes("/document/generateLink") ? (
        <Content>
          <AppViews />
        </Content>
      ) : (
        <Layout>
          <HeaderNav isMobile={isMobile} localization={true} />
          {isNavTop && !isMobile ? (
            <TopNav routeInfo={currentRouteInfo} />
          ) : null}
          <Layout className="app-container">
            {!isMobile && <SideNav routeInfo={currentRouteInfo} />}
            <Layout className="app-layout" style={getLayoutDirectionGutter()}>
              <div
                className={`app-content ${isNavTop ? "layout-top-nav" : ""}`}
              >
                <PageHeader
                  display={currentRouteInfo?.breadcrumb}
                  title={currentRouteInfo?.title}
                />
                <Content>
                  <AppViews />
                </Content>
              </div>
              <Footer localization={true} />
            </Layout>
          </Layout>
          {isMobile && <MobileNav />}
        </Layout>
      )}
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType, locale } = theme;
  return { navCollapsed, navType, locale };
};

export default connect(mapStateToProps)(React.memo(AppLayout));
