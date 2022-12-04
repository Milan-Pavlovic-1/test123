import React, { useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "components/layout-components/Footer";
import { AUTH_PREFIX_PATH } from "configs/AppConfig";
import IntlMessage from "components/util-components/IntlMessage";

const ErrorTwo = ({ localization = true }) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  return (
    <div className={`h-100`}>
      <div className="container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1">
        <div>
          <img
            width={180}
            className="img-fluid"
            src={`/img/${
              theme === "light" ? "TIPASLogo.png" : "logo-white.png"
            }`}
            alt=""
          />
        </div>
        <div className="container">
          <div className="text-center mb-5">
            <img className="img-fluid" src="/img/others/img-21.png" alt="" />
            <h1 className="font-weight-bold mb-4">
              {setLocale(
                localization,
                "Your account has been locked due to many attempts. Please contact your supervisor"
              )}
            </h1>
            <Link to={`${AUTH_PREFIX_PATH}`}>
              <Button type="primary">
                {setLocale(localization, "BackToHome")}
              </Button>
            </Link>
          </div>
        </div>
        <Footer localization={true} />
      </div>
    </div>
  );
};

export default ErrorTwo;
