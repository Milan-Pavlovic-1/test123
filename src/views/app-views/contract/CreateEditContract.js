import { Form, Modal, Button, Col, Row, message, Select, Checkbox } from "antd";
import Tag from "antd/es/tag";
import IntlMessage from "components/util-components/IntlMessage";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import StatusCode from "configs/StatusCode";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ApiService from "services/ApiService";
var serviceLangToUSe = "lang/locales/it_IT.json";
const CreateEditContract = (props) => {
  const { confirm, warning } = Modal;
  const { localization } = props;
  const [clients, setClients] = useState([]);
  const [options, setOptions] = useState([]);
  const [offers, setOffers] = useState([]);
  const [isClientSelected, setIsClientSelected] = useState(false);
  const [checkedTemplates, setTemplates] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState();
  const [listOfExistingTemplates, setListOfExistingTemplates] = useState([]);
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const [form] = Form.useForm();
  useEffect(() => {
    ApiService.Get("Client/Get").then((data) => {
      setClients(data);
    });
    ApiService.Get("Contract/GetAllTemplates").then((templates) => {
      templates.map((template) => {
        var option = {
          label: template.name,
          value: template.id.toString(),
          disabled: false,
        };
        console.log(option);
        setOptions((prevState) => [...prevState, option]);
      });
    });
  }, []);
  useEffect(() => {
    if (props.locale == "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
    }
  }, [props.locale]);

  useEffect(() => {
    const res1 = options.filter(
      (page1) =>
        !listOfExistingTemplates.find(
          (page2) => page1.value === page2.toString()
        )
    );

    res1.map((exist) => {
      var index = options.findIndex(
        (template) => template.value === exist.value.toString()
      );

      options[index] = { ...options[index], disabled: false };
    });
    setOptions([...options]);

    listOfExistingTemplates.map((existTemplateId) => {
      var index = options.findIndex(
        (template) => template.value === existTemplateId.toString()
      );

      options[index] = { ...options[index], disabled: true };
    });
    setOptions([...options]);
  }, [listOfExistingTemplates]);

  const history = useHistory();
  const setCheckedTemplates = (checkedValues) => {
    setTemplates([]);
    checkedValues.map((value) => {
      options.map((template) => {
        template.value === value &&
          setTemplates((prevState) => [...prevState, template]);
      });
    });
  };
  const checkExistingTempaltes = (selectedOfferId) => {
    if (selectedOfferId !== 0) {
      var formData = new FormData();
      formData.append("ClientId", selectedClientId);
      formData.append("OfferId", selectedOfferId);
      ApiService.Post("Contract/GetListOfCreatedTemplates", formData).then(
        (existingTemplates) => {
          setListOfExistingTemplates(existingTemplates);
        }
      );
    }
  };
  const enableSelectOffer = (selected) => {
    if (selected !== 0) {
      setSelectedClientId(selected);
      var formData = new FormData();
      formData.append("ClientId", selected);
      formData.append("OfferId", 0);
      ApiService.Post("Contract/GetListOfCreatedTemplates", formData).then(
        (existingTemplates) => {
          setListOfExistingTemplates(existingTemplates);
        }
      );
      ApiService.Get("Offer/Get").then((data) => {
        /*  returns list offers filtered by clientId */
        setOffers(
          data.filter((d) => {
            return d.clientId === selected;
          })
        );
        form.setFieldsValue({ offerId: 0 });
      });
      setIsClientSelected(true);
    } else {
      setIsClientSelected(false);
    }
  };
  const save = (values) => {
    if (checkedTemplates.length === 0) {
      warning({
        title: serviceLangToUSe.TemplateNotSelected,
        content: serviceLangToUSe.MustChooseAtLastOneTemplate,
        okText: serviceLangToUSe.Yes,
      });
    } else {
      var form = new FormData();

      form.append("clientId", values.clientId);
      form.append("offerId", values.offerId);
      form.append("templates", JSON.stringify(checkedTemplates));

      ApiService.Post("Contract/Insert", form).then((data) => {
        if (data == StatusCode.Successfully) {
          message.success(serviceLangToUSe.ContractHasBeenCreateSuccessfully);
          history.push(`${APP_PREFIX_PATH}/contract/list-contracts`);
        } else {
          message.error(`Error occured!`);
        }
      });
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
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
    }
  }, [props.locale]);
  return (
    <div className="m-2 client-add">
      <div>
        <h1 className="title">{setLocale(localization, "CreateContract")}</h1>
      </div>
      <Form
        form={form}
        layout="vertical"
        name="create-edit-user"
        onFinish={save}
      >
        <Row className="my-5">
          <Col span={24} xl={{ span: 12 }}>
            <Row>
              <Col span={20}>
                <Form.Item
                  label={setLocale(localization, "Client")}
                  name="clientId"
                  initialValue={0}
                  rules={[
                    {
                      required: true,
                      message: setLocale(localization, "ClientIsRequired"),
                    },
                  ]}
                >
                  <Select onSelect={(e) => enableSelectOffer(e)}>
                    <Select.Option value={0}>
                      --- {setLocale(localization, "SelectClient")} ---
                    </Select.Option>
                    {clients.map((client) => (
                      <Select.Option value={client.id}>
                        {client.clientName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={20}>
                <Form.Item
                  label={setLocale(localization, "Offers")}
                  name="offerId"
                  initialValue={0}
                >
                  <Select
                    onSelect={(e) => checkExistingTempaltes(e)}
                    disabled={!isClientSelected}
                  >
                    <Select.Option value={0}>
                      --- {setLocale(localization, "SelectOffer")} ---
                    </Select.Option>
                    {offers.map((offer) => (
                      <Select.Option value={offer.id}>
                        {offer.title}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item
                  label={serviceLangToUSe.ContractTemplates}
                  name="tempaltes"
                >
                  <Checkbox.Group
                    options={options}
                    onChange={setCheckedTemplates}
                  />
                </Form.Item>
              </Col>
            </Row>

            {listOfExistingTemplates.length > 0 && (
              <Tag color="warning" style={{ marginBottom: "30px" }}>
                Disabled templates have already been created.
              </Tag>
            )}

            <Row gutter={10}>
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
                    {setLocale(localization, "Create")}
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateEditContract;
