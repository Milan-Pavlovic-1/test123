import React from "react";
import { APP_NAME } from "configs/AppConfig";
import IntlMessage from "components/util-components/IntlMessage";

export default function Footer({ localization }) {
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  return (
    <footer className="footer">
      <span>
        {setLocale(localization, "Copyright")} &copy;{" "}
        {`${new Date().getFullYear()}`}{" "}
        <span className="font-weight-semibold">{`${APP_NAME}`}</span>{" "}
        {setLocale(localization, "AllRightsReserved")}.
      </span>
      <div>
        <a href="https://tipas.it/" className="text-gray">
          {setLocale(localization, "AboutUs")}
        </a>
      </div>
    </footer>
  );
}
