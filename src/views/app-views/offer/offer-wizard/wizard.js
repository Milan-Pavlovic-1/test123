import React, { useEffect, useRef, useState } from "react";
import { Steps, Button, message, Modal } from "antd";
import SecondStep from "./secondStep";
import FirstStep from "./firstStep";
import IntlMessage from "components/util-components/IntlMessage";
import ApiService from "services/ApiService";
import StatusCode from "configs/StatusCode";
import PdfComponent from "../pdf-export/PdfComponent";
import { connect } from "react-redux";

const { Step } = Steps;
const { confirm } = Modal;
var serviceLangToUSe = "lang/locales/it_IT.json";

function Wizard(props) {
  const { mode, params, localization } = props;

  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

  const childRef = useRef();
  const [current, setCurrent] = useState(0);
  const [offerName, setOfferName] = useState();
  const [isServiceItemsNull, setIsServiceItemsNull] = useState(true);
  const [clientID, setClientID] = useState();
  const [serviceInOfferBeforeEdit, setServiceInOfferBeforeEdit] = useState({
    offerItems: [],
  });

  const [serviceInOffer, setServiceInOffer] = useState({
    offerItems: [],
  });

  var activityLogMsg = [];
  const [clientData, setDataClient] = useState();
  const [offerData, setOfferData] = useState([]);
  const setDataOnFirstStep = (offer) => {
    var stepsForm = childRef.current.getForm();

    stepsForm.setFieldsValue({
      offerName: offer.title,
      clientId: offer.clientId,
    });
    setOfferName(offer.title);
    setClientID(offer.clientId);
  };
  useEffect(() => {
    if (props.locale == "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
    }
  }, [props.locale]);

  function next() {
    const c = current + 1;
    setCurrent(c);
  }

  function prev() {
    const c = current - 1;
    setCurrent(c);
  }
  const steps = [
    {
      title: setLocale(localization, "BasicInformation"),
      content: (
        <FirstStep
          ref={childRef}
          next={next}
          offerName={offerName}
          setOfferName={setOfferName}
          setClientID={setClientID}
          setDataClient={setDataClient}
          clientID={clientID}
          localization={localization}
          mode={mode}
        />
      ),
      step: 1,
    },
    {
      title: setLocale(localization, "SelectItems"),
      content: (
        <SecondStep
          mode={mode}
          serviceInOffer={serviceInOffer}
          setServiceInOffer={setServiceInOffer}
          setIsServiceItemsNull={setIsServiceItemsNull}
          localization={localization}
        />
      ),

      step: 2,
    },
    {
      title: setLocale(localization, "Finish"),
      content: (
        <PdfComponent
          serviceInOffer={serviceInOffer}
          clientData={clientData}
          localization={localization}
          mode={mode}
          offerId = {params.key}
        />
      ),
      step: 3,
    },
  ];

  useEffect(() => {
    mode !== "ADD" &&
      ApiService.GetById("Offer/GetById", params.key).then((offer) => {
        setOfferData(offer);
        ApiService.GetById("Client/GetById", offer.clientId).then((data) => {
          setServiceInOffer(JSON.parse(offer.offerItems));
          setServiceInOfferBeforeEdit(JSON.parse(offer.offerItems));
          setDataClient(data);
          switch (mode) {
            case "VIEW":
              setCurrent(2);
              break;
            case "EDIT":
              ApiService.Put(
                "Offer/DoesPriceListChange",
                new FormData(),
                params.key
              ).then((d) => {
                if (d) {
                  confirm({
                    title: serviceLangToUSe.PriceListChanged,
                    content: serviceLangToUSe.DoYouWantToLoadNewChanges,
                    okText: serviceLangToUSe.Yes,
                    cancelText: serviceLangToUSe.No,
                    onOk() {
                      ApiService.Put(
                        "Offer/GetChangedOffer",
                        new FormData(),
                        params.key
                      ).then((newOffer) => {
                        setServiceInOffer(JSON.parse(newOffer.offerItems));
                        setDataOnFirstStep(newOffer);
                      });
                    },
                    onCancel() {
                      setDataOnFirstStep(offer);
                    },
                  });
                } else {
                  setDataOnFirstStep(offer);
                }
              });
              break;
          }
        });
      });
  }, []);
  const CreateOffer = () => {
    var form = new FormData();

    form.append("title", offerName);
    form.append("clientID", clientID);
    form.append("offerItems", JSON.stringify(serviceInOffer));

    if (mode === "ADD") {
      ApiService.Post("Offer/Insert", form).then((data) => {
        if (data === StatusCode.Successfully) {
          message.success(serviceLangToUSe.OfferHasBeenCreateSuccessfully);
          next();
        } else {
          message.error(`Error occured!`);
          next();
        }
      });
    }
    if (mode === "EDIT" && params.key != null) {
      //Change name for offer
      offerData.title !== offerName &&
      activityLogMsg.push(`has change offer name from  ${offerData.title} to ${offerName}.`)
      //Delete from offer
      const DeleteGroupOrService = serviceInOfferBeforeEdit.offerItems.filter(
        (page1) =>
          !serviceInOffer.offerItems.find(
            (page2) => page1.offerItemId === page2.offerItemId
          )
      );

      DeleteGroupOrService.map((deleted) => {
        deleted.name !== undefined &&
          activityLogMsg.push(`has deleted ${deleted.name} from ${offerData.title}.`,)
      });

      //Add to offer
      const AddedGroupOrService = serviceInOffer.offerItems.filter(
        (page1) =>
          !serviceInOfferBeforeEdit.offerItems.find(
            (page2) => page1.offerItemId === page2.offerItemId
          )
      );
      AddedGroupOrService.map((added) => {
        added.name !== undefined &&
        activityLogMsg.push( `has added ${added.name} to ${offerData.title}.`)
      });

      serviceInOfferBeforeEdit.offerItems.map((element) => {
        let elementFromNewArray = serviceInOffer.offerItems.find(
          (el) => el.offerItemId === element.offerItemId
        );
        //Delete element from group
        const DeleteElementItems = element?.items?.filter(
          (page1) =>
            !elementFromNewArray.items.find((page2) => page1.id === page2.id)
        );

        DeleteElementItems.map((deleteElement) => {
          deleteElement.name !== undefined &&
            activityLogMsg.push(`has deleted ${deleteElement.name} in ${elementFromNewArray.name}.`)
        });

        //Discount
        const discount = element?.discount;
        const discountFromNewArray = parseInt(elementFromNewArray?.discount);

        if (discount !== undefined && discountFromNewArray !== undefined) {
          if (discount !== discountFromNewArray) {      
            activityLogMsg.push(`element "${elementFromNewArray?.name}" has changed discount from "${discount}" to "${discountFromNewArray}".`)
          }
        }
      });
      activityLogMsg.map((message)=>{
        form.append("messages", message)
      })
      ApiService.Put("Offer/Update", form, params.key).then((data) => {
        if (data == true) {
          message.success(serviceLangToUSe.OfferHasBeenUpdateSuccessfully);
          next();
        } else {
          message.error(`Error occured!`);
        }
      });
    }
  };
  return (
    <div>
      {mode !== "VIEW" && (
        <Steps className="my-4" current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      )}

      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 &&
          (current === 0 ? (
            <Button
              type="primary"
              onClick={() => childRef.current.submitFirstWizardForm()}
            >
              {setLocale(localization, "Next")}
            </Button>
          ) : (
            <Button
              disabled={isServiceItemsNull}
              htmlType="submit"
              type="primary"
              className="my-3 right"
              onClick={CreateOffer}
            >
              {mode === "EDIT"
                ? setLocale(localization, "Save")
                : setLocale(localization, "CreateOffer")}
            </Button>
          ))}
        {current > 0 && current < 2 && (
          <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
            {setLocale(localization, "Previous")}
          </Button>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};
export default connect(mapStateToProps)(Wizard);
