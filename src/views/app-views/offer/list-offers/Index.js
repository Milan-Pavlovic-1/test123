import { APP_PREFIX_PATH } from "configs/AppConfig";
import React from "react";
import Table from "views/app-views/offer/list-offers/Table";
import { Link } from "react-router-dom";
import { Button } from "antd";
import IntlMessage from "components/util-components/IntlMessage";

function OfferList({ localization = true }) {
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  return (
    <div>
      <div>
        <Button type="primary">
          <Link to={`${APP_PREFIX_PATH}/offer/create-offer`}>
            <b>{setLocale(localization, "CreateOffer")}</b>
          </Link>
        </Button>
      </div>
      <div className="py-3 list">
        <Table localization={true} />
      </div>
    </div>
  );
}

export default OfferList;
