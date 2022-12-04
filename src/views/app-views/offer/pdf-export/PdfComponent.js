import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ThirdStep from "../offer-wizard/thirdStep";
import { FilePdfOutlined, MailOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import IntlMessage from "components/util-components/IntlMessage";
import ActivityLog from "views/app-views/activity-log";
import ApiService from "services/ApiService";
const PdfComponent = (props) => {
  const componentRef = useRef();
  const localization = props.localization;
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const sendToEmail = () => {
    /* var formData = new FormData();
    formData.append("email", props.clientData.email)
    formData.append("document", componentRef.current)
    ApiService.Post("Offer/SendViaEmail", formData).then((d) => {
      d === true ? message.success("Email has been successfully sent!") : message.error("Error occured!")
    }) */
  };

  return (
    <div>
      <div>
        <ReactToPrint
          trigger={() => (
            <Button type="primary">
              <FilePdfOutlined type="printer" />
              <span className="ml-1">{setLocale(localization, "Export")}</span>
            </Button>
          )}
          content={() => componentRef.current}
        />
        <span className="ml-1"></span>
        <Button onClick={() => sendToEmail()} type="primary">
          <MailOutlined type="printer" />
          <span className="ml-1">
            {" "}
            {setLocale(localization, "SendToEmail")}
          </span>
        </Button>
        <hr className="d-print-none" />
      </div>
      <ThirdStep
        ref={componentRef}
        serviceInOffer={props.serviceInOffer}
        clientData={props.clientData}
        mode={props.mode}
        localization={localization}
      />
      
      {props.mode === "VIEW" && <ActivityLog locationOfView ="byOffer" offerId = {props.offerId} />}
    </div>
  );
};

export default PdfComponent;
