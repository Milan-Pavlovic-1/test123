import React, { useEffect, useRef } from "react";
import CreateEditOffer from "views/app-views/CreateEditOffer";
import { Tabs } from "antd";
import ServiceItems from "../offer-services/ServiceItems";
import ServiceGroups from "../offer-services/ServiceGroups";
import "../pdf-export/index.css";
import { useDrag, useDrop } from "react-dnd";
import IntlMessage from "components/util-components/IntlMessage";
const { TabPane } = Tabs;

function SecondStep(props) {
  const {
    serviceInOffer,
    setServiceInOffer,
    localization,
    setIsServiceItemsNull,
  } = props;

  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  useEffect(() => {
    serviceInOffer.offerItems.length > 0
      ? setIsServiceItemsNull(false)
      : setIsServiceItemsNull(true);
    serviceInOffer.offerItems.map((service) => {
      var index = serviceInOffer.offerItems.indexOf(service);
      serviceInOffer.offerItems[index].position = index.toString();
      setServiceInOffer({
        offerItems: serviceInOffer.offerItems,
      });
    });
  }, [serviceInOffer.offerItems]);

  const type = "DraggableBodyRow";

  const DraggableBodyRow = ({
    index,
    moveRow,
    className,
    style,
    ...restProps
  }) => {
    const ref = useRef(null);
    const [{ isOver, dropClassName }, drop] = useDrop({
      accept: type,
      collect: (monitor) => {
        const { index: dragIndex } = monitor.getItem() || {};

        if (dragIndex === index) {
          return {};
        }

        return {
          isOver: monitor.isOver(),
          dropClassName:
            dragIndex < index ? " drop-over-downward" : " drop-over-upward",
        };
      },
      drop: (item) => {
        if (item.index && index !== undefined) {
          moveRow(item.index, index);
        }

        if (item.index === 0 && index >= 1) {
          moveRow(item.index, index);
        }
      },
    });
    const [, drag] = useDrag({
      type,
      item: {
        index,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    drop(drag(ref));
    return (
      <tr
        ref={ref}
        className={`${className}${isOver ? dropClassName : ""}`}
        style={{
          cursor: "move",
          ...style,
        }}
        {...restProps}
      />
    );
  };

  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab={setLocale(localization, "ServiceGroup")} key="1">
          <ServiceGroups
            localization={props.localization}
            mode="ADD"
            setServiceInOffer={setServiceInOffer}
            serviceInOffer={serviceInOffer}
          />
        </TabPane>
        <TabPane tab={setLocale(localization, "ServiceItems")} key="2">
          <ServiceItems
            localization={props.localization}
            setServiceInOffer={setServiceInOffer}
            serviceInOffer={serviceInOffer}
          />
        </TabPane>
      </Tabs>
      <CreateEditOffer
        localization={props.localization}
        mode={props.mode}
        serviceInOffer={serviceInOffer}
        setServiceInOffer={setServiceInOffer}
        DraggableBodyRow={DraggableBodyRow}
      />
    </div>
  );
}

export default SecondStep;
