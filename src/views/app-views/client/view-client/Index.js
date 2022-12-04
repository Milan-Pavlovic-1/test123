import { useEffect, useState } from "react";
import CurrentClient from "./CurrentClient";
import CurrentOffers from "./CurrentOffers";
import ApiService from "services/ApiService";
import ActivityLog from "views/app-views/activity-log";
import CurrentDocument from "views/app-views/document/CurrentDocument";
import { Button } from "antd";
import UploadManually from "views/app-views/document/UploadManually";
import ContractList from "views/app-views/contract/list-contract/Table";
import IntlMessage from "components/util-components/IntlMessage";
import UploadDocument from "views/app-views/document/UploadDocument";
const Index = (props) => {
  const localization = true;
  const clientId = props.match.params.key;

  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const [client, setClient] = useState();
  const [showUpload, setShowUpload] = useState(false);

  const [documentsData, setDocumentsData] = useState([]);

  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const id = window.location.pathname.slice(20, 23);

  const handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...pagination };
    pager.current = pagination.current;
    setPagination({
      pagination: pager,
    });
    fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };
  useEffect(() => {
    getCurrentClient();
    // getOffers();
    getCurrentDocuments();
  }, [id]);
  //add_right_endpoint
  const getCurrentDocuments = (paramss = {}) => {
    var formData = new FormData();
    formData.append("sortField", paramss.sortField);
    formData.append("sortOrder", paramss.sortOrder);
    ApiService.Put("Document/GetDocumentByClientId", formData, clientId).then(
      (docs) => {
        setDocumentsData(docs);
      }
    );
  };
  const getCurrentClient = () => {
    setLoading(true);
    ApiService.GetById("Client/GetById", clientId).then((response) => {
      var result = [];
      result.push(response);
      setClient(result);
    });

    setLoading(false);
  };

  useEffect(() => {
    getCurrentClient();
  }, []);

  return (
    <div className="current">
      <div>
        <CurrentClient
          client={client}
          loading={loading}
          localization={localization}
        />
      </div>
      <div className="coffers" style={{ padding: "4rem 0" }}>
        <div>
          <CurrentOffers localization={localization} clientId={clientId} />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginTop: 100,
            }}
          >
            <div className="py-2">
              <h3 style={{ color: "green" }}>
                {setLocale(localization, "Documents")}
              </h3>
            </div>
          </div>

          <CurrentDocument
            loading={loading2}
            pagination={pagination}
            handleTableChange={handleTableChange}
            localization={true}
            id={clientId}
          />
        </div>
        <div className="py-3 list">
          <div className="py-2">
            <h3 style={{ color: "green" }}>
              {setLocale(localization, "Contracts")}
            </h3>
          </div>
          <ContractList
            locationOfView="byClient"
            clientId={clientId}
            localization={true}
          />
        </div>
        <ActivityLog locationOfView="byClient" clientId = {clientId} />
      </div>
    </div>
  );
};

export default Index;
