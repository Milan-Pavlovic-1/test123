import { Button } from "antd";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import UserList from "./Table";
import IntlMessage from "components/util-components/IntlMessage";

function AccountList({ localization = "true" }) {
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  return (
    <div>
      <div>
        <Button type="primary" href={`${APP_PREFIX_PATH}/account/add-account`}>
          <b>{setLocale(localization, "AddNewUser")}</b>
        </Button>
      </div>
      <div className="py-3">
        <UserList localization={true} />
      </div>
    </div>
  );
}
export default AccountList;
