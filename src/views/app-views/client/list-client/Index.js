import React from "react";
import { Button } from "antd";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import Table from "./Table";
import IntlMessage from "components/util-components/IntlMessage";
import { Link } from "react-router-dom";

function ClientList({ localization = "true" }) {
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  return (
    <div>
      <div>

        <Button type="primary">
          <Link
            to={`${APP_PREFIX_PATH}/clients/add-client`}
          >
           <b>{setLocale(localization, "CreateClient")}</b>
          </Link>
        </Button>
      </div>
      <div className="py-3 list">
        <Table localization={true} />
      </div>
    </div>
  );
}
export default ClientList;
