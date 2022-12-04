import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/home`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/activity`}
          component={lazy(() => import(`./activity/list-activity`))}
        />
        {/* ACCOUNT */}
        <Route
          path={`${APP_PREFIX_PATH}/account/account-settings/:key`}
          component={lazy(() => import(`./account/account-settings/index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/account/AccountList`}
          component={lazy(() => import(`./account/list-account/Index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/account/add-account`}
          component={lazy(() => import(`./account/add-account/index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/account/edit-account/:key`}
          component={lazy(() => import(`./account/edit-account/index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/account/view-account/:key`}
          component={lazy(() => import(`./account/view-account/index`))}
        />
        {/* CLIENT */}
        <Route
          path={`${APP_PREFIX_PATH}/clients/ListClients`}
          component={lazy(() => import(`./client/list-client/Index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/clients/add-client`}
          component={lazy(() => import(`./client/add-client/AddClient`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/clients/edit-client/:key`}
          component={lazy(() => import(`./client/edit-client/Index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/clients/view-client/:key`}
          component={lazy(() => import(`./client/view-client/Index`))}
        />

        {/* PRICE */}
        <Route
          path={`${APP_PREFIX_PATH}/price/priceList`}
          component={lazy(() => import(`./price/list-price/Index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/price/add-price`}
          component={lazy(() => import(`./price/add-price/index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/price/edit-price/:key`}
          component={lazy(() => import(`./price/edit-price/Index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/price/view-price/:key`}
          component={lazy(() => import(`./price/view-price/Index`))}
        />
        {/* GROUP */}
        <Route
          path={`${APP_PREFIX_PATH}/group/groupList`}
          component={lazy(() => import(`./group/list-group/Index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/group/edit-group/:key`}
          component={lazy(() => import(`./group/edit-group/Index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/group/add-group`}
          component={lazy(() => import(`./group/add-group/Index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/group/view-group/:key`}
          component={lazy(() => import(`./group/view-group/Index`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/offers/list-offers`}
          component={lazy(() => import(`./offer/list-offers/Index`))}
        />
        {/* OFFER */}

        <Route
          path={`${APP_PREFIX_PATH}/offer/create-offer`}
          component={lazy(() => import(`./offer/add-offer/index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/offer/edit-offer/:key`}
          component={lazy(() => import(`./offer/edit-offer/index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/offer/view-offer/:key`}
          component={lazy(() => import(`./offer/view-offer/index`))}
        />
        {/* DOCUMENTS */}
        <Route
          path={`${APP_PREFIX_PATH}/document/generateLink/:key`}
          component={lazy(() => import(`./document/UploadDocument`))}
        />

        {/* CONTRACT */}
        <Route
          path={`${APP_PREFIX_PATH}/contract/create-contract`}
          component={lazy(() => import(`./contract/add-contract/index`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/contract/edit-contract`}
          component={lazy(() => import(`./contract/edit-contract/index`))}
        />
        {/* CONTRACT */}
        <Route
          path={`${APP_PREFIX_PATH}/contract/list-contracts`}
          component={lazy(() => import(`./contract/list-contract/index`))}
          />
          <Route
          path={`${APP_PREFIX_PATH}/contract/view-contract/:key`}
          component={lazy(() => import(`./contract/view-contract/Index`))}
        />
           <Route
          path={`${APP_PREFIX_PATH}/contract/list-contractsByOffer/:key`}
          component={lazy(() =>
            import(`./contract/list-contract/listContractsByOffer`)
          )}
        />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
