import IntlMessage from 'components/util-components/IntlMessage';
import React from 'react'
import OfferList from 'views/app-views/offer/list-offers/Table';

function CurrentOffers(props) {
  const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  return (
    <div>
      <div><h3 className="ctitle">{setLocale(props.localization, "Offers")}</h3></div>
      <OfferList locationOfView ="byClient" clientId={props.clientId}/>
    </div>
  )
}

export default CurrentOffers