import { useEffect, useState, useRef } from "react";
import { Form, Input, Row, Col, Button, Modal, message } from "antd";
import ApiService from "services/ApiService";
import { Link, useHistory } from "react-router-dom";
import IntlMessage from "../../components/util-components/IntlMessage";
import Regex from "configs/RegEx";
import { connect } from "react-redux";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { useDrag, useDrop } from "react-dnd";
import SortableList from "components/shared-components/SortableList/Index";
import TableTransfer from "components/shared-components/TransferTable/Index";
import DataTable from "components/shared-components/TransferTable/DataTable";
const { confirm } = Modal;
var serviceLangToUSe = "lang/locales/it_IT.json";
function CreateEditGroup(props) {
  const [currentLang, SetCurrentLang] = useState();
  const [data, setData] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState();
  const [priceDisc, setPriceDisc] = useState(0);
  const [disc, setDisc] = useState(0);

  const [items, setItems] = useState([]);
  const { mode, params } = props;
  const [form] = Form.useForm();
  const history = useHistory();
  const { localization } = props;
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const isFieldReadOnly = mode === "VIEW" && true;
  const calculatePrice = () => {
    var itemsPrice = 0;
    items?.map((item) => (itemsPrice += item.price));
    setSelectedPrice(itemsPrice);
  };
  const calculatePriceWithDiscount = () => {
    var total = selectedPrice * ((100 - disc) / 100);
    setPriceDisc(total.toFixed(2));
  };
  useEffect(() => {
    calculatePriceWithDiscount();
  }, [disc, selectedPrice]);

  useEffect(() => {
    calculatePrice();
  }, [items]);
  useEffect(() => {
    getItems();
  }, []);
  const getItems = () => {
    ApiService.Get("ServiceItem/Get").then((data) => setData(data));
  };
  const save = (values) => {
    let form = new FormData();
    form.append("code", values.code);
    form.append("name", values.name);
    form.append("serviceItems", JSON.stringify(items));
    form.append("price", selectedPrice);
    form.append(
      "discount",
      values.discount === undefined ? 0 : values.discount
    );

    if (mode === "ADD") {
      ApiService.Post("ServiceGroup/Insert", form).then(
        () => history.push(`${APP_PREFIX_PATH}/group/groupList`),
        message.success(serviceLangToUSe.ServiceGroupSuccessfulyAdded)
      );
    }
    if (mode === "EDIT" && params.key != null) {
      ApiService.Put("ServiceGroup/Update", form, params.key).then(
        () => history.push(`${APP_PREFIX_PATH}/group/groupList`),
        message.success(serviceLangToUSe.GroupItemSuccessfulyChanged)
      );
    }
  };
  function showConfirm() {
    confirm({
      title: serviceLangToUSe.UnsavedInformation,
      content: serviceLangToUSe.WouldYouLikeSaveChange,
      okText: serviceLangToUSe.Yes,
      okType: "danger",
      cancelText: serviceLangToUSe.Cancel,
      closable: "true",
      onOk() {
        form.submit();
      },
      onCancel() {},
    });
  }
  useEffect(() => {
    if (props.locale === "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
      SetCurrentLang(props.locale);
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
      SetCurrentLang(props.locale);
    }
  }, [props.locale]);
  useEffect(() => {
    if (mode !== "ADD" && params.key != null) {
      ApiService.GetById("ServiceGroup/GetById", params.key).then((data) => {
        form.setFieldsValue({
          code: data.code,
          name: data.name,
          discount: data.discount,
        });
        setItems(data.items);
        setDisc(data.discount);
      });
    }
  }, []);

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
    <div className="m-2 price">
      <div>
        {mode === "ADD" ? (
          <h1>{setLocale(localization, "CreateNewServiceGroup")}</h1>
        ) : mode === "EDIT" ? (
          <h1>{setLocale(localization, "EditPriceForGroupService")}</h1>
        ) : (
          <h1>{setLocale(localization, "ServiceGroupDetails")}</h1>
        )}
      </div>
      <div>
        <Form
          form={form}
          layout="vertical"
          name="create-edit-group"
          onFinish={save}
        >
          <Row className="my-5">
            <Col span={10}>
              <Col span={22}>
                <Form.Item label={setLocale(localization, "Code")} name="code">
                  <Input
                    placeholder={serviceLangToUSe.Code}
                    readOnly={isFieldReadOnly}
                  />
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item label={setLocale(localization, "Name")} name="name">
                  <Input
                    placeholder={serviceLangToUSe.Name}
                    readOnly={isFieldReadOnly}
                  />
                </Form.Item>
              </Col>
            </Col>
            <Col span={10}>
              <Col span={20}>
                <Form.Item
                  label={setLocale(localization, "Price")}
                  name="price"
                  rules={[
                    {
                      pattern: Regex.Numbers,
                      message: Regex.NumberText,
                    },
                  ]}
                >
                  <Input
                    placeholder={selectedPrice + "€"}
                    readOnly={isFieldReadOnly}
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={20}>
                <Form.Item
                  label={setLocale(localization, "Discount")}
                  name="discount"
                  rules={[
                    {
                      pattern: Regex.Numbers,
                      message: Regex.NumberText,
                    },
                  ]}
                >
                  <Input
                    placeholder={serviceLangToUSe.Discount}
                    readOnly={isFieldReadOnly}
                    onChange={(e) => setDisc(e.target.value)}
                    type="number"
                    min={0}
                    max={100}
                  />
                </Form.Item>
              </Col>
            </Col>

            <Col span={24}>
              {mode === "VIEW" ? (
                <Col span={9}>
                  <SortableList data={items} localization={true} />
                </Col>
              ) : (
                <Row className="my-4">
                  <Col span={9} className="mx-3">
                    <h3>{setLocale(localization, "Items")}</h3>
                    <TableTransfer
                      data={data}
                      setItems={setItems}
                      items={items}
                      localization={true}
                    />
                  </Col>
                  <Col span={9}>
                    <h3>{setLocale(localization, "SelectedItems")}</h3>
                    <DataTable
                      items={items}
                      setItems={setItems}
                      localization={true}
                    />
                  </Col>
                </Row>
              )}
            </Col>
            <Col span={24}>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 25, marginRight: 200 }}>
                  {setLocale(localization, "TotalPrice")} :
                  <span>{priceDisc} €</span>
                </span>
              </div>
            </Col>

            {mode === "VIEW" ? (
              <Col>
                <Form.Item>
                  <Button type="primary">
                    <Link
                      to={`${APP_PREFIX_PATH}/group/edit-group/${params.key}`}
                    >
                      {setLocale(localization, "Edit")}
                    </Link>
                  </Button>
                </Form.Item>
              </Col>
            ) : (
              <Row gutter={20}>
                <Col>
                  <Form.Item>
                    <Button onClick={showConfirm}>
                      {setLocale(localization, "Cancel")}
                    </Button>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button htmlType="submit" type="primary">
                      {setLocale(localization, "Save")}
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            )}
          </Row>
        </Form>
      </div>
    </div>
  );
}
const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};
export default connect(mapStateToProps)(CreateEditGroup);
