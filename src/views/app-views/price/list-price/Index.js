import { Button } from "antd";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import Table from "./Table";
import IntlMessage from "components/util-components/IntlMessage";

function PriceList({ localization = "true" }) {
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  return (
    <div>
      <div>
        <Button type="primary" href={`${APP_PREFIX_PATH}/price/add-price`}>
          <b>{setLocale(localization, "CreateNewServiceItem")}</b>
        </Button>
      </div>
      <div className="py-3">
        <Table localization={true} />
      </div>
    </div>
  );
}
export default PriceList;
