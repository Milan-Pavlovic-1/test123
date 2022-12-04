import { Button } from 'antd'
import IntlMessage from 'components/util-components/IntlMessage';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import React from 'react'
import ContractList from './Table'

function index({localization="true"}) {
    const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  return (
    <div>
      <div>
        <Button type="primary" href={`${APP_PREFIX_PATH}/contract/create-contract`}>
          <b>{setLocale(localization, "CreateContract")}</b>
        </Button>
      </div>
      <div className="py-3">
        <ContractList localization={true} />
      </div>
    </div>
  )
}

export default index