import { Button } from "antd";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import Table from "./Table";
import IntlMessage from "components/util-components/IntlMessage";

function GroupList({ localization = "true" }) {
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  return (
    <div>
      <div>
        <Button type="primary" href={`${APP_PREFIX_PATH}/group/add-group`}>
          <b>{setLocale(localization, "CreateNewServiceGroup")}</b>
        </Button>
      </div>
      <div className="py-3">
        <Table localization={true} />
      </div>
    </div>
  );
}
export default GroupList;
